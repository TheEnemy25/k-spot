import axios from "axios";
import APIRoutes from "./api/APIRoutes";
import AuthenticationResult from "./utils/AuthenticationResult";
import StorageManager from "./utils/StorageManager";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
  async (config) => {
    try {
      const token = await StorageManager.getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const tokenExpireTime = await StorageManager.getTokenExpireTime();
      const isTokenExpired =
        Date.now() > Date.parse(tokenExpireTime?.toString() ?? "");

      if (isTokenExpired) {
        const refreshToken = await StorageManager.getRefreshToken();
        const { data } = await Axios.post(
          APIRoutes.getAuthenticationUrl() + "refresh",
          { refreshToken, token }
        );

        const result: AuthenticationResult = data;
        StorageManager.setAuthData(result);
      }

      return config;
    } catch (error) {
      console.error("Error processing Axios request:", error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios response error:", error);

    if (error.response && error.response.status === 401) {
      // Обробка несанкціонованого доступу, наприклад, перенаправлення на сторінку входу.
      // Тут ви можете визначити власний обробник помилок.
    }

    return Promise.reject(error);
  }
);

export default Axios;
import axios from "axios";
import APIRoutes from "./api/APIRoutes";
import AuthenticationResult from "./utils/AuthenticationResult";
import StorageManager from "./utils/StorageManager";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
//   async (req) => {
//       const expireTime = await StorageManager.getTokenExpireTime();
      
//       if (expireTime !== null) {
//           const tokenExpireTime = typeof expireTime === 'number' ? expireTime.toString() : expireTime;

//           if (Date.now() > Date.parse(tokenExpireTime)) {
//               const RefreshToken = await StorageManager.getRefreshToken();
//               const Token = await StorageManager.getToken();
              
//               try {
//                   const res = await axios.post(
//                       APIRoutes.getAuthenticationUrl() + "refresh",
//                       { RefreshToken, Token }
//                   );
                  
//                   let result: AuthenticationResult = res.data;
//                   StorageManager.setAuthData(result);
//               } catch (error) {
//                   console.error('Error refreshing token:', error);
//                   throw error;
//               }
//           }

//           const token = await StorageManager.getToken();

//           if (token) {
//               req.headers.Authorization = "Bearer " + token;
//           }
//       }

//       return req;
//   },

//   async (error) => {
//       return Promise.reject(error);
//   }
);

Axios.interceptors.response.use(
  (response) => {
      return response;
  },
);

export default Axios;
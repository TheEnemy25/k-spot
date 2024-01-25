import AuthenticationResult from "./AuthenticationResult";

class StorageManager {
  static async getToken(): Promise<string | null> {
    // Реалізуйте отримання токена зберіганого у вашому місці (localStorage, cookies і т.д.)
    // Приклад для localStorage:
    return localStorage.getItem("token");
  }

  static async getRefreshToken(): Promise<string | null> {
    // Реалізуйте отримання оновлювального токена
    return localStorage.getItem("refreshToken");
  }

  static async getTokenExpireTime(): Promise<number | null> {
    // Реалізуйте отримання часу закінчення терміну дії токена

    const expireTimeString = localStorage.getItem("tokenExpireTime");
    return expireTimeString ? parseInt(expireTimeString, 10) : null;
  }

  static async setAuthData(authResult: AuthenticationResult): Promise<void> {
    try {
      localStorage.setItem("token", authResult.accessToken);
      localStorage.setItem("refreshToken", authResult.refreshToken);
      localStorage.setItem("tokenExpireTime", authResult.expiresAt.toString());
    } catch (error) {
      console.error("Error saving authentication data:", error);
      // Обробити помилку за потреби
    }
  }
}

export default StorageManager;

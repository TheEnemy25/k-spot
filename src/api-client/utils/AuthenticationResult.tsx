interface AuthenticationResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export default AuthenticationResult;

interface AuthenticationResult {
    jwtId: string,
    jwtToken: string,
    jwtExpireTime: string,
    refreshToken: string,
    user: any
}

export default AuthenticationResult;
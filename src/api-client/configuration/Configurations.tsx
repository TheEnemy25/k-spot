//  ===========     API Configuration    ===========
const APIConfiguration = {
  baseURL: "https://localhost:5445",
};

//  ===========     IdentityServer4 configuration    ===========
const IdentityServerConfiguration = {
  authority: "https://localhost:5443",
  client_id: "k-spot",
  post_logout_redirect_uri: "http://localhost:3000/signout-oidc",
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: "code",
  scope: "openid profile CinemaWebAPI",
};

export { APIConfiguration, IdentityServerConfiguration };

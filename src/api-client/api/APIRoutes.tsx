import {
  APIConfiguration,
  IdentityServerConfiguration,
} from "../configuration/Configurations";

const APIRoutes = {
  getMoviesControllerUrl: () => APIConfiguration.baseURL + "/api",

  getAuthenticationUrl: () => IdentityServerConfiguration.authority + "/ping",
  PingUrl: () => `${APIConfiguration.baseURL}/api/ping`,
  CinemaTheaterUrl: () => `${APIConfiguration.baseURL}/api/cinema`,

TestPingUrl: () => `${IdentityServerConfiguration.authority}/test/ping`,

 

};

export default APIRoutes;

// PingUrl: () => `${APIConfiguration.baseURL}/api/ping`,
// CinemaTheaterUrl: () => `${APIConfiguration.baseURL}/api/cinema`,

// TestPingUrl: () => `${IdentityServerConfiguration.authority}/test/ping`,
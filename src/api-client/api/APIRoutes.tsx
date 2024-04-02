import {
  APIConfiguration,
  IdentityServerConfiguration,
} from "../configuration/Configurations";

const APIRoutes = {
  actorControllerUrl: () => APIConfiguration.baseURL + "/api/Actor",
  getAuthenticationUrl: () => IdentityServerConfiguration.authority,
};

export default APIRoutes;
//   getMoviesControllerUrl: () => APIConfiguration.baseURL + "/api",

//   getAuthenticationUrl: () => IdentityServerConfiguration.authority + "/ping",
//   PingUrl: () => `${APIConfiguration.baseURL}/api/ping`,
//   CinemaTheaterUrl: () => `${APIConfiguration.baseURL}/api/cinema`,

// TestPingUrl: () => `${IdentityServerConfiguration.authority}/test/ping`,
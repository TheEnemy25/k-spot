import {
  APIConfiguration,
  IdentityServerConfiguration,
} from "../configuration/Configurations";

const APIRoutes = {
  actorControllerUrl: () => APIConfiguration.baseURL + "/api/Actor",
  movieControllerUrl: () => APIConfiguration.baseURL + "/api/Movie",

  getAuthenticationUrl: () => IdentityServerConfiguration.authority,
};

export default APIRoutes;
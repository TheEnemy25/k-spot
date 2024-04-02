import APIRoutes from "../../api/APIRoutes";
import APIService from "../../api/APIService";
import LoginModel from "../../models/authentication-models/Request/LoginModel";
import RefreshToken from "../../models/authentication-models/Request/RefreshToken";
import RegistrationModel from "../../models/authentication-models/Request/RegistrationModel";
import AuthenticationResult from "../../models/authentication-models/Response/AuthenticationResult";

const route = APIRoutes.getAuthenticationUrl();

const AuthService = {

    register: async (model: RegistrationModel) => APIService.post<AuthenticationResult>(route + "register", model),

    login: async (model: LoginModel) => APIService.post<AuthenticationResult>(route + "login", model),

    refresh: async (model: RefreshToken) => APIService.post<AuthenticationResult>(route + "refresh", model)
};

export default AuthService;
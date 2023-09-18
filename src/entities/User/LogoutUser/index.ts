import { LogoutUserController } from "./LogoutUserController";
import { LogoutUserRepository } from "./LogoutUserRepository";
import { LogoutUserService } from "./LogoutUserService";

const logoutUserRepository = new LogoutUserRepository();

const logoutUserService = new LogoutUserService(logoutUserRepository);

const logoutUserController = new LogoutUserController(logoutUserService);

export { logoutUserController };

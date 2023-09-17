import { LoginUserController } from "./LoginUserController";
import { LoginUserRepository } from "./LoginUserRepository";
import { LoginUserService } from './LoginUserService';

const loginUserRepository = new LoginUserRepository();

const loginUserService = new LoginUserService(loginUserRepository);

const loginUserController = new LoginUserController(loginUserService);

export { loginUserController };
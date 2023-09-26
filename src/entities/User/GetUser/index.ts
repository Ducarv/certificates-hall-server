import { GetUserController } from "./GetUserController";
import { GetUserRepository } from "./GetUserRepository";
import { GetUserService } from "./GetUserService";

const getUserRepository = new GetUserRepository();

const getUserService = new GetUserService(getUserRepository);

const getUserController = new GetUserController(getUserService);

export { getUserController };
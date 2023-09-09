import { CreateUserController } from "./CreateUserController";
import { CreateUserRepository } from "./CreateUserRepository";
import { CreateUserService } from "./CreateUserService";

const createUserRepository = new CreateUserRepository()

const createUserService = new CreateUserService(createUserRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController }
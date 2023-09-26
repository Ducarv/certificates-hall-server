import { CheckUserCreation } from "../../../providers/user/CheckUserCreation";
import { CreateUserController } from "./CreateUserController";
import { CreateUserRepository } from "./CreateUserRepository";
import { CreateUserService } from "./CreateUserService";

const createUserRepository = new CreateUserRepository()

const createUserService = new CreateUserService(createUserRepository);
const checkUserCreation = new CheckUserCreation()

const createUserController = new CreateUserController(createUserService, checkUserCreation);

export { createUserController }
import { CreateUserDTO } from "./CreateUser.dto";
import { CreateUserRepository } from "./CreateUserRepository";

export class CreateUserService {
    constructor(
        private createUserRepository: CreateUserRepository
    ) {}

    public async create(userData: CreateUserDTO) {
        const newUser = await this.createUserRepository.create(userData);

        return newUser;
    }
}
import { GetUserDTO } from "./GetUser.dto";
import { GetUserRepository } from "./GetUserRepository";

export class GetUserService {
    constructor(private getUserRepository: GetUserRepository) {}

    public async execute(userData: GetUserDTO) {
        const user = await this.getUserRepository.execute(userData);

        return user;
    }
}
import { LogoutUserDTO } from "./LogoutUser.dto";
import { LogoutUserRepository } from "./LogoutUserRepository";

export class LogoutUserService {
    constructor(
        private logoutUserRepository: LogoutUserRepository,
    ) {};

    public async execute(userData: LogoutUserDTO) {
        const user = await this.logoutUserRepository.execute(userData);

        return user;
    }
}
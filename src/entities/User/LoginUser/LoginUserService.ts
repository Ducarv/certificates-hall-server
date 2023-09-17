import { LoginUserDTO } from "./LoginUser.dto";
import { LoginUserRepository } from "./LoginUserRepository";

export class LoginUserService {
    constructor(
        private loginUserRepository: LoginUserRepository,
    ) {}

    public async execute(userData: LoginUserDTO) {
        const user = await this.loginUserRepository.execute(userData);

        return user;
    }
}
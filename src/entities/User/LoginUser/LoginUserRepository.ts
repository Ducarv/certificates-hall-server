import { prisma } from "../../../providers/prisma/prismaService";
import { LoginUserDTO } from "./LoginUser.dto";

export class LoginUserRepository {
    constructor() {}

    public async execute(userData: LoginUserDTO) {
        const user = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        return user;
    }
}
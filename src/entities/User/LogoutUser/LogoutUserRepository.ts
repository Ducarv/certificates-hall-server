import { prisma } from "../../../providers/prisma/prismaService";
import { LogoutUserDTO } from "./LogoutUser.dto";

export class LogoutUserRepository {
    constructor() {};

    public async execute(userData: LogoutUserDTO) {
        const user = await prisma.user.update({
            where: {
                id: userData.id,
            },
            data: {
                isOnline: false
            }
        })

        return user;
    }
}
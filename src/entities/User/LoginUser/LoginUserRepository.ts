import { prisma } from "../../../providers/prisma/prismaService";
import { LoginUserDTO } from "./LoginUser.dto";

export class LoginUserRepository {
    constructor() {}

    public async execute(userData: LoginUserDTO) {
        if(typeof userData.email !== "string" || userData.email.trim() === "") {
            throw new Error("Invalid Email!");
        }

        const user = await prisma.user.update({
            where: {
                email: userData.email
            },
            data : {
                isOnline: true
            }
        })

        return user;
    }
}
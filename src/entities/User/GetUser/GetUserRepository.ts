import { prisma } from "../../../providers/prisma/prismaService";
import { GetUserDTO } from "./GetUser.dto";

export class GetUserRepository {
    constructor() {}

    public async execute(userData: GetUserDTO) {
        const user = await prisma.user.findUnique({
            where: {
                id: userData.id,
            }
        })

        return user;
    }
}
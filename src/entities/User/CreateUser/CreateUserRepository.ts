import { prisma } from "../../../providers/prisma/prismaService";
import { CreateUserDTO } from "./CreateUser.dto";

export class CreateUserRepository {
    constructor() {}

    public async create(userData: CreateUserDTO) {
        try {   
            const user = await prisma.user.create({
                data: {
                    name: userData.name,
                    email: userData.email
                }
            });

            return user;
        } catch(err) {
            throw new Error(`cannot create user: ${err}`)
        }
    }
}
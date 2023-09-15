import { prisma } from "../../../providers/prisma/prismaService";
import { CreateUserDTO } from "./CreateUser.dto";

export class CreateUserRepository {
  constructor() {}

  public async create(userData: CreateUserDTO) {
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
      },
    });

    return user;
  }
}

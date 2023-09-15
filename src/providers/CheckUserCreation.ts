import { prisma } from "./prisma/prismaService";

interface userCheck {
  email: string;
}

export class CheckUserCreation {
  constructor() {}

  public async execute(userData: userCheck): Promise<boolean> {
    const isExistUser = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    return isExistUser ? true : false; // true if is defined | false if is undefined
  }
}

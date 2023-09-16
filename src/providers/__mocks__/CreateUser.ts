import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";
import { CreateUserRepository } from "../../entities/User/CreateUser/CreateUserRepository";
import { CreateUserService } from "../../entities/User/CreateUser/CreateUserService";
import { CreateUserController } from "../../entities/User/CreateUser/CreateUserController";

export const createUserMock = mockDeep<CreateUserRepository>();
export const createUserServiceMock = mockDeep<CreateUserService>();
export const createUserControllerMock = mockDeep<CreateUserController>();

beforeEach(() => {
    mockReset(createUserMock);
    mockReset(createUserServiceMock);
    mockReset(createUserControllerMock);
});

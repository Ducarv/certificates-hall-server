import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";
import { CreateUserRepository } from "../../entities/User/CreateUser/CreateUserRepository";

export const createUserMock = mockDeep<CreateUserRepository>();

beforeEach(() => {
    mockReset(createUserMock);
});

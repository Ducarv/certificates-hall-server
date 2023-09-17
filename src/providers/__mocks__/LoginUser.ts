import { mockDeep, mockReset } from "vitest-mock-extended";
import { LoginUserRepository } from "../../entities/User/LoginUser/LoginUserRepository";
import { beforeEach } from "vitest";

export const loginUserMock = mockDeep<LoginUserRepository>();

beforeEach(async () => {
    mockReset(loginUserMock);
})
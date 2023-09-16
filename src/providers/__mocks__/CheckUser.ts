import { mockDeep, mockReset } from "vitest-mock-extended";
import { CheckUserCreation } from "../CheckUserCreation";
import { beforeEach } from "node:test";

export const checkUserMock = mockDeep<CheckUserCreation>();

beforeEach(() => {
    mockReset(checkUserMock);
})
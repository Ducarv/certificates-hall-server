import { describe, expect, it, vi } from 'vitest';
import { CreateUserDTO } from '../CreateUser/CreateUser.dto';
import { createUserMock } from '../../../providers/__mocks__/CreateUser';

vi.mock("../CreateUser/CreateUserRepository")

describe("CreateUser", async () => {
    const testUser: CreateUserDTO = {
        name: "Eduard",
        email: "eduahsr@edu.com"
    }

    it("should create user with success", async () => {
        createUserMock.create.mockResolvedValue({ ...testUser, id: "12345" }); 
        const su = await createUserMock.create({ ...testUser });
        expect(su).toStrictEqual({ ...testUser, id: "12345"})
    })
})
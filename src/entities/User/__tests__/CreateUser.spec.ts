import { describe, expect, it, vi } from 'vitest';
import { CreateUserDTO } from '../CreateUser/CreateUser.dto';
import { createUserMock } from '../../../providers/__mocks__/CreateUser';

vi.mock("../CreateUser")

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

    it("should handle user creation failure", async () => {
        createUserMock.create.mockRejectedValue(new Error("error to create user"));

        try {
            await createUserMock.create({ ...testUser });
        } catch(err: any) {
            expect(err .message).toBe("error to create user");
        }
    })

    it("should call createUserRepository.create with correct arguments", async () => {
        createUserMock.create.mockResolvedValue({ ...testUser, id: "12345" });
        await createUserMock.create({ ...testUser });
        expect(createUserMock.create).toHaveBeenCalledWith({ ...testUser });
    })
})
import { describe, expect, it, vi } from "vitest";
import { loginUserMock } from "../../../providers/__mocks__/LoginUser";

vi.mock("../LoginUser/LoginUserRepository");
vi.mock("../CreateUser/CreateUserRepository")

describe("LoginUser", async () => {
    const testUser = { email: "du@mail.com" }
    
    it("should login user successfully", async () => {
        
    })
})
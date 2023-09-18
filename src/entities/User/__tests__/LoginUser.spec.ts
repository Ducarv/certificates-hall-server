import { describe, expect, it, vi } from "vitest";
import { loginUserMock } from "../../../providers/__mocks__/LoginUser";
import { createUserMock } from "../../../providers/__mocks__/CreateUser";
import { LoginUserDTO } from '../LoginUser/LoginUser.dto';

vi.mock("../LoginUser/LoginUserRepository");
vi.mock("../CreateUser/CreateUserRepository")

describe("LoginUser", async () => { 
    const userTest = {
        id: "123-abc",
        name: "eduardo",
        email: "edu@email.com"
    }
    
    const wrongEmail = "wrong@mail.com"

    it("should login user successfully", async () => {
        
    })
})
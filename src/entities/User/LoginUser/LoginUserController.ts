import { LoginUserService } from "./LoginUserService";
import { Request, Response } from "express";

export class LoginUserController {
    constructor(
        private loginUserService: LoginUserService
    ) {}

    public async handle(request: Request, response: Response): Promise<Response | any> {
        const { email } = request.body;

        try {
            const user = await this.loginUserService.execute({ email });

            if (user) {
              return response.status(200).json({ message: "Login successfully", user });
            }

            if (!user) {
              return response.status(404).json({ message: "User not found" });
            }
        } catch(error: any) {
            return response.status(500).json({ message: `Internal Server error! ${error.message}`});
        }
    }
}
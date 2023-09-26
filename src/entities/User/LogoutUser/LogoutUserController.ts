import { Request, Response } from "express";
import { LogoutUserService } from "./LogoutUserService";

export class LogoutUserController {
    constructor(
        private logoutUserService: LogoutUserService,
    ) {};

    public async handle(request: Request, response: Response): Promise<Response | any> {
        const { id } = request.params;

        try {
            const user = await this.logoutUserService.execute({ id });
            if(user) {
                return response.status(200).json({ message: "User logged out!", user });
            }

            if(!user) {
                return response.status(404).json({ message: "User not found" });
            }
        } catch(error) {
            return response.status(500).json({ error: "internal server error" });
        }
    }
}
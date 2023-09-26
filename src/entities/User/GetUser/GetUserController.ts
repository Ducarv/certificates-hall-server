import { GetUserService } from "./GetUserService";
import { Request, Response } from 'express';

export class GetUserController {
    constructor(private getUserService: GetUserService) {}

    public async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const user = await this.getUserService.execute({ id });

            if(!user) {
                return response.status(401).json({ message: "User not found" });
            }

            return response.status(200).json({ message: "User Infos: ", user }); 
        } catch(error: any) {
            return response.status(500).json({ message: `Internal Server error! ${error.message}`});
        }
    }
}
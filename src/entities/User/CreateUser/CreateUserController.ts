import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;

        try {
            await this.createUserService.create({
                name,
                email
            })

            return response.status(201).send();
        } catch(err) {
            return response.status(400);
        }
    }
}
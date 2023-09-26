import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { CheckUserCreation } from "../../../providers/user/CheckUserCreation";

export class CreateUserController {
  constructor(
    private createUserService: CreateUserService,
    private checkUserCreation: CheckUserCreation
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userAlreadyExist = await this.checkUserCreation.execute({ email });

    if (!userAlreadyExist) {
      await this.createUserService.create({
        name,
        email,
      });

      return response.status(201).send("User created successfully");
    }

    return response.status(400).send("User already exist!");
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dtos/User.dto';
import { UserService } from './User.service';

@Controller("user")
export class UserController {
    constructor(private userService: UserService) {}

    @Post("/register")
    async create(@Body() user: UserDTO) {
        const newUser = await this.userService.create(user);

        return newUser;
    }
}

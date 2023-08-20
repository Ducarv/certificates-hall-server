import { Injectable } from '@nestjs/common';
import { UserDTO } from './dtos/User.dto';
import { UserRepository } from './User.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    public async create(user: UserDTO) {
        const newUser = await this.userRepository.create(user);

        return newUser;
    };
}

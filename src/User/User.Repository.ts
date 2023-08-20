import { Injectable } from '@nestjs/common';
import { UserDTO } from './dtos/User.dto';
import { PrismaService } from 'src/providers/prisma.service';

Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    public async create(userParam: UserDTO) {
        try{
            const newUser = await this.prisma.user.create({
                name: userParam.name,
                email: userParam.email,
                description: userParam.description,
            })
    
            return newUser;
        } catch(error) {
            throw new Error(`Error to create a new User: ${error.message}`)
        }
    }
};
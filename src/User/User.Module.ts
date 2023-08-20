import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserService } from './User.service';
import { UserRepository } from './User.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserController, UserService],
})
export class UserModule {}

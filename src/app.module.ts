import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config'
import { UserController } from "./User/User.controller";
import { UserModule } from "./User/User.module";
import { UserService } from "./User/User.service";

@Module({
    imports: [
        ConfigModule.forRoot(), 
        UserModule
    ],
})
export class AppModule {}
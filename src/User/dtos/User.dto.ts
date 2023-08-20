import { IsNotEmpty, IsEmail, Length } from 'class-validator';
export class UserDTO {
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Length(0, 255) 
    description?: string;
}

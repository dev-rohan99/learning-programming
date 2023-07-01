import { IsEmail, IsString, Matches, MinLength } from "class-validator";


// register data transfer object
export class UserDto {
    @IsString()
    name: string = "";

    @IsString()
    @Matches(/^[a-z0-9-_]{3,}$/, { message : "Username must be valid!" })
    username: string = "";

    @IsString()
    role: string = "";

    @IsString()
    @Matches(/^(01|\+8801|8801)[0-9]{9}$/, { message : "Phone number must be valid!" })
    phone: string = "";

    @IsEmail()
    @Matches(/^[a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/)
    email: string = "";

    @IsString()
    @Matches(/^[a-zA-Z0-9-_?><~`!@#$%^&*()=+/\\\]\{\};:'" ]{6,}$/)
    @MinLength(6)
    password: string = "";
}

// login data transfer object
export class LoginDto {
    @IsString()
    @Matches(/^[a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/)
    usernameOrEmail: string = "";

    @IsString()
    @Matches(/^[a-zA-Z0-9-_?><~`!@#$%^&*()=+/\\\]\{\};:'" ]{6,}$/)
    @MinLength(6)
    password: string = "";
}


import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, UserDto } from '../dtos/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService) {}

    // user register
    @Post('/register')
    register(@Body() body: UserDto){
        return this.authService.register(body);
    }

    // user login
    @Post('/login')
    login(@Body() body: LoginDto){
        return this.authService.login(body);
    }

}

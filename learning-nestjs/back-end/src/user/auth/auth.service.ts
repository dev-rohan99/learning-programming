import { ConflictException, Injectable, HttpException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { LoginUserInterface, UserInterface } from "../interfaces/users.interface";
import { hashPassword, verifyPassword } from "../../utility/password";
import { createToken } from "../../utility/token";
import { User, UserType, Prisma } from "@prisma/client";
import { isEmail, isUsername } from "../../utility/validation";

@Injectable()
export class AuthService {

    constructor(private readonly prismaService : PrismaService) {}

    async register({name, username, email, phone, password, role} : UserInterface): Promise<{ user: User }> {
        const userExist = await this.prismaService.user.findUnique({
            where: { email: email }
        })
        if(userExist) throw new ConflictException();
        const user = await this.prismaService.user.create({
            data: {
                name,
                username,
                email,
                phone,
                password: hashPassword(password),
                role: UserType.USER
            }
        });
        return { user: user }
    }

    async login({usernameOrEmail, password}: LoginUserInterface) {
        if(isEmail(usernameOrEmail)){
            const user = await this.prismaService.user.findUnique({
                where: {
                    email: usernameOrEmail
                }
            });
            if(!user) throw new HttpException("Invalid credentials!", 400);
            if(user){
                const verifyPass = await verifyPassword(password, user.password);
                if(!verifyPass) throw new HttpException("Password not matched!", 401);
                if(verifyPass){
                    const token = createToken({
                        id: user.id
                    }, "365d");

                    return {
                        user,
                        token: token
                    }
                }
            }
        }else if(isUsername(usernameOrEmail)){
            const user = await this.prismaService.user.findUnique({
                where: {
                    username: usernameOrEmail
                }
            });
            if(!user) throw new HttpException("Invalid credentials!", 400);
            if(user){
                const verifyPass = await verifyPassword(password, user.password);
                if(!verifyPass) throw new HttpException("Password not matched!", 401);
                if(verifyPass){
                    const token = createToken({
                        id: user.id
                    }, "365d");
                    return {
                        user,
                        token: token
                    }
                }
            }
        }else{
            throw new HttpException("Invalid credentials!", 400);
        }
    }

}


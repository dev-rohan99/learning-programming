import { Module, Global } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Global()
@Module({
    controllers : [AuthController],
    providers : [AuthService, PrismaService],
})

export class UserModule {}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

// const configServiceProvider = {
//   provide: ConfigService,
//   useClass:
//     process.env.NODE_ENV === 'development'
//       ? DevelopmentConfigService
//       : ProductionConfigService,
// };

@Module({
  imports : [UserModule, PrismaModule]
})

export class AppModule implements NestModule {
  configure(consumer : MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}


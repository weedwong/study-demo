import { EmailModule } from './logical/email/email.module';
import { AuthModule } from './logical/auth/auth.module';
// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './logical/user/user.service';
// import { UserController } from './logical/user/user.controller';
import { UserModule } from './logical/user/user.module';
import { UserController } from './logical/user/user.controller';

@Module({
  imports: [EmailModule, AuthModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

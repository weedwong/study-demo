import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import Config from '../../../_config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: Config.email.host,
        port: '25', // 456 是加密端口
        ignoreTLS: true,
        secure: false,
        auth: {
          user: Config.email.user,
          pass: Config.email.pass,
        },
      },
      defaults: {
        from: `"子弹便签" <${Config.email.user}>`,
      },
      preview: false,
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}

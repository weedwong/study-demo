import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.qq.com',
        port: '25', // 456 是加密端口
        ignoreTLS: true,
        secure: false,
        auth: {
          user: '1878248380@qq.com',
          pass: 'iymazoqhwdbhceeb',
        },
      },
      defaults: {
        from: '"子弹便签" <1878248380@qq.com>',
      },
      preview: false,
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}

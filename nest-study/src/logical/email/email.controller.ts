import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly EmailService: EmailService) {}

  @Post('send-code')
  async sendCode(@Body() params: { email: string; name: string }) {
    if (params.email && params.name) {
      return await this.EmailService.sendMail(
        params.email,
        '子弹便签**注册验证码',
        '您正在注册子弹便签, 验证码【 2580 】',
      );
    } else {
      return {
        code: 600,
        msg: `邮箱地址或账号不正确`,
      };
    }
  }
}

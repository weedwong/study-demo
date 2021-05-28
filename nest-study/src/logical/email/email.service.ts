import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Logger } from '../../utils/log4js';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(
    target = 'weedwong@outlook.com',
    subject: string,
    content: string,
  ) {
    try {
      const result = await this.mailerService.sendMail({
        to: target, // 要发送的目标邮箱
        // from: 'noreply@nestjs.com', // 自定义发送者的邮箱，默认在mudule已配置了，可以不配置
        subject: subject, // 标题
        text: content, // 发送的文字
      });
      const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      MessageId: ${result.messageId}
      Response: ${result.response}
      From: ${result.envelope.from}
      To: ${result.envelope.to[0]} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      `;
      Logger.info(logFormat);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}

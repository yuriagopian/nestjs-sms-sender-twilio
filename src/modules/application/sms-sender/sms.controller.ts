import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Req,
  BadRequestException,
  Body,
} from '@nestjs/common';
import SmsService from './sms.service';

@Controller('sms')
@UseInterceptors(ClassSerializerInterceptor)
export default class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('initiate-verification')
  async initiatePhoneNumberVerification(@Body() body) {
    await this.smsService.initiatePhoneNumberVerification(body.phoneNumber);
  }

  @Post('check-verification-code')
  async checkVerificationCode(@Body() body) {
    await this.smsService.confirmPhoneNumber(body.phoneNumber, body.code);
  }
}

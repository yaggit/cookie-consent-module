import { Controller, Post, Body, Get, Query, Req } from '@nestjs/common';
import { CookieConsentService } from './cookie-consent.service';
import { ConsentDto } from './dto/consent.dto';
import { Request } from 'express';

@Controller('cookie-consent')
export class CookieConsentController {
  constructor(private readonly consentService: CookieConsentService) {}

  @Post()
  saveConsent(@Req() req: Request, @Body() dto: ConsentDto) {
    const sessionId = req.sessionID;
    const ip = req.ip;
    return this.consentService.saveConsent({
      ...dto,
      sessionId: sessionId || dto.sessionId,
      ipAddress: ip || dto.ipAddress,
    });
  }

  @Get()
  getConsent(@Query('sessionId') sessionId: string) {
    return this.consentService.getConsentBySession(sessionId);
  }
}

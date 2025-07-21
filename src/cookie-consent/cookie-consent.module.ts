import { Module } from '@nestjs/common';
import { CookieConsentService } from './cookie-consent.service';
import { CookieConsentController } from './cookie-consent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookieConsent } from './cookie-consent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CookieConsent])],
  providers: [CookieConsentService],
  controllers: [CookieConsentController],
  exports: [CookieConsentService],
})
export class CookieConsentModule {}

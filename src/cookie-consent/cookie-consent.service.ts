import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CookieConsent } from './cookie-consent.entity';
import { ConsentDto } from './dto/consent.dto';

@Injectable()
export class CookieConsentService {
  constructor(
    @InjectRepository(CookieConsent)
    private readonly consentRepo: Repository<CookieConsent>,
  ) {}

  async saveConsent(dto: ConsentDto): Promise<CookieConsent> {
    const entity = this.consentRepo.create({
      ...dto,
      sessionId: dto.sessionId || undefined,
      ipAddress: dto.ipAddress || undefined,
      userId: dto.userId || undefined,
    });
    return this.consentRepo.save(entity);
  }

  async getConsentBySession(sessionId: string): Promise<CookieConsent | null> {
    return this.consentRepo.findOne({ where: { sessionId } });
  }

  async getConsentByUser(userId: string): Promise<CookieConsent[]> {
    return this.consentRepo.find({ where: { userId } });
  }
}

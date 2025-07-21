import { Test, TestingModule } from '@nestjs/testing';
import { CookieConsentService } from './cookie-consent.service';

describe('CookieConsentService', () => {
  let service: CookieConsentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CookieConsentService],
    }).compile();

    service = module.get<CookieConsentService>(CookieConsentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

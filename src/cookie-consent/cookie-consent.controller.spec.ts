import { Test, TestingModule } from '@nestjs/testing';
import { CookieConsentController } from './cookie-consent.controller';

describe('CookieConsentController', () => {
  let controller: CookieConsentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookieConsentController],
    }).compile();

    controller = module.get<CookieConsentController>(CookieConsentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

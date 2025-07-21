import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookieConsentModule } from './cookie-consent/cookie-consent.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: false,
      migrations: ['dist/migrations/*.js'],
    }),
    CookieConsentModule,
  ],
})
export class AppModule {}

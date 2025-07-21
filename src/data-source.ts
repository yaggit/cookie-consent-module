import { DataSource } from 'typeorm';
import { CookieConsent } from './cookie-consent/cookie-consent.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [CookieConsent],
  migrations: ['migrations/*.ts'],
});

import { IsOptional, IsString, IsObject } from 'class-validator';

export class ConsentDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  sessionId?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsObject()
  consent: Record<string, boolean>;
}

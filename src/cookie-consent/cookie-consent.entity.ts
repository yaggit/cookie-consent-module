import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class CookieConsent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  userId?: string;

  @Column({ nullable: true })
  sessionId?: string;

  @Column({ nullable: true })
  ipAddress?: string;

  @Column('jsonb')
  consent: Record<string, boolean>;

  @CreateDateColumn()
  timestamp: Date;
}

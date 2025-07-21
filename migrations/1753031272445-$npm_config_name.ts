import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1753031272445 implements MigrationInterface {
    name = ' $npmConfigName1753031272445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cookie_consent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying, "sessionId" character varying, "ipAddress" character varying, "consent" jsonb NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b2313780b103cab7e24d4a78cd6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cookie_consent"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class userCreate1683231061871 implements MigrationInterface {
    name = 'userCreate1683231061871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "USERS" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "USER_ID" uuid NOT NULL DEFAULT uuid_generate_v4(), "NAME" character varying NOT NULL, "EMAIL" character varying NOT NULL, "PASSWORD" character varying NOT NULL, "ISACTIVE" boolean NOT NULL DEFAULT false, "PHONE" character varying NOT NULL, CONSTRAINT "UQ_03c5c0bfa50dcdf69c204bdebf2" UNIQUE ("EMAIL"), CONSTRAINT "UQ_f6de0675e956637b643c73ad96e" UNIQUE ("PHONE"), CONSTRAINT "PK_f37d934f4f6abb757dce91ce6f2" PRIMARY KEY ("USER_ID"))`);
        await queryRunner.query(`CREATE INDEX "user-name-idx" ON "USERS" ("NAME") `);
        await queryRunner.query(`CREATE INDEX "user-email-idx" ON "USERS" ("EMAIL") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."user-email-idx"`);
        await queryRunner.query(`DROP INDEX "public"."user-name-idx"`);
        await queryRunner.query(`DROP TABLE "USERS"`);
    }

}

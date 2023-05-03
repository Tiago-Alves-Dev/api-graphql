import {MigrationInterface, QueryRunner} from "typeorm";

export class roomCreate1683154539634 implements MigrationInterface {
    name = 'roomCreate1683154539634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ROOM" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "ROOM_ID" uuid NOT NULL DEFAULT uuid_generate_v4(), "NAME" character varying NOT NULL, "DESCRIPTION" character varying NOT NULL, "IMAGE" character varying, "PERIOD" character varying NOT NULL, "HOUR_START" TIME, "HOUR_END" TIME, "IS_ACTIVE" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_6730418205732d969fb09293561" UNIQUE ("NAME"), CONSTRAINT "PK_6b1f6db3c7e8a36888e1857fa7e" PRIMARY KEY ("ROOM_ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ROOM"`);
    }

}

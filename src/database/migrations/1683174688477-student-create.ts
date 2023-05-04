import {MigrationInterface, QueryRunner} from "typeorm";

export class studentCreate1683174688477 implements MigrationInterface {
    name = 'studentCreate1683174688477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "STUDENT" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "STUDENT_ID" uuid NOT NULL DEFAULT uuid_generate_v4(), "ROOM_ID" uuid NOT NULL, "REGISTRATION" character varying NOT NULL, "NAME" character varying NOT NULL, "AGE" integer NOT NULL, "BIRTH" TIMESTAMP NOT NULL, "EMAIL" character varying NOT NULL, "PHONE" character varying NOT NULL, "MOTHER" character varying NOT NULL, "FATHER" character varying NOT NULL, "PHONTO" character varying, "CPF" character varying NOT NULL, "ADDRESS" character varying, "ADDRESS_NUMBER" character varying, "ADDRESS_COMPLEMENT" character varying, "DISTRICT" character varying, "ZIPCODE" character varying, "CITY" character varying, "STATE" character varying, CONSTRAINT "UQ_0c223973a7f9b3db8b390f95cd3" UNIQUE ("EMAIL"), CONSTRAINT "UQ_50a2472941ca13911f6cf1a63e9" UNIQUE ("PHONE"), CONSTRAINT "UQ_90eeb0656168a493b8d7b0c5741" UNIQUE ("CPF"), CONSTRAINT "PK_4bf66e58fecd55c8a06ba0f0f31" PRIMARY KEY ("STUDENT_ID"))`);
        await queryRunner.query(`CREATE INDEX "student-registration-idx" ON "STUDENT" ("REGISTRATION") `);
        await queryRunner.query(`CREATE INDEX "student-name-idx" ON "STUDENT" ("NAME") `);
        await queryRunner.query(`CREATE INDEX "student-email-idx" ON "STUDENT" ("EMAIL") `);
        await queryRunner.query(`CREATE INDEX "student-phone-idx" ON "STUDENT" ("PHONE") `);
        await queryRunner.query(`CREATE INDEX "student-cpf-idx" ON "STUDENT" ("CPF") `);
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD CONSTRAINT "FK_2b0cf7a0b7f6d9a95911fb80482" FOREIGN KEY ("ROOM_ID") REFERENCES "ROOM"("ROOM_ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP CONSTRAINT "FK_2b0cf7a0b7f6d9a95911fb80482"`);
        await queryRunner.query(`DROP INDEX "public"."student-cpf-idx"`);
        await queryRunner.query(`DROP INDEX "public"."student-phone-idx"`);
        await queryRunner.query(`DROP INDEX "public"."student-email-idx"`);
        await queryRunner.query(`DROP INDEX "public"."student-name-idx"`);
        await queryRunner.query(`DROP INDEX "public"."student-registration-idx"`);
        await queryRunner.query(`DROP TABLE "STUDENT"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class updatePeriodRoom1683242239548 implements MigrationInterface {
    name = 'updatePeriodRoom1683242239548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ROOM" DROP COLUMN "PERIOD"`);
        await queryRunner.query(`CREATE TYPE "public"."ROOM_period_enum" AS ENUM('MORNING', 'AFTERNOON', 'NIGHT')`);
        await queryRunner.query(`ALTER TABLE "ROOM" ADD "PERIOD" "public"."ROOM_period_enum" NOT NULL DEFAULT 'MORNING'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ROOM" DROP COLUMN "PERIOD"`);
        await queryRunner.query(`DROP TYPE "public"."ROOM_period_enum"`);
        await queryRunner.query(`ALTER TABLE "ROOM" ADD "PERIOD" character varying NOT NULL`);
    }

}

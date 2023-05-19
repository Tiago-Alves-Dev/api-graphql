import {MigrationInterface, QueryRunner} from "typeorm";

export class updateStudent1684469833548 implements MigrationInterface {
    name = 'updateStudent1684469833548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP COLUMN "DISTRICT"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD "DISTRICT" character varying`);
    }

}

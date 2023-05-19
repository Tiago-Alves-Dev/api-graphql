import {MigrationInterface, QueryRunner} from "typeorm";

export class updateStudentIsactive1684448848145 implements MigrationInterface {
    name = 'updateStudentIsactive1684448848145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD "ISACTIVE" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP COLUMN "ISACTIVE"`);
    }

}

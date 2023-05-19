import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1683856353134 implements MigrationInterface {
    name = 'updateUser1683856353134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "USERS" ADD "IMAGE" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "USERS" DROP COLUMN "IMAGE"`);
    }

}

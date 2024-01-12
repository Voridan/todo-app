import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1703370446340 implements MigrationInterface {
    name = 'Migration1703370446340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" smallint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}

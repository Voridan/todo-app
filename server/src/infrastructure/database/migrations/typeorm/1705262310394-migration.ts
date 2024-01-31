import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1705262310394 implements MigrationInterface {
    name = 'Migration1705262310394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_list" DROP CONSTRAINT "FK_f4ca381ce539b9b73c842d9eb1b"`);
        await queryRunner.query(`ALTER TABLE "task_list" RENAME COLUMN "listsGoupId" TO "listsGroupId"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD CONSTRAINT "FK_4c4e128c26206b5204df83526d5" FOREIGN KEY ("listsGroupId") REFERENCES "lists_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_list" DROP CONSTRAINT "FK_4c4e128c26206b5204df83526d5"`);
        await queryRunner.query(`ALTER TABLE "task_list" RENAME COLUMN "listsGroupId" TO "listsGoupId"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD CONSTRAINT "FK_f4ca381ce539b9b73c842d9eb1b" FOREIGN KEY ("listsGoupId") REFERENCES "lists_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

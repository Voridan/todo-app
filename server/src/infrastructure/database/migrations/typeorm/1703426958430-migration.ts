import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1703426958430 implements MigrationInterface {
    name = 'Migration1703426958430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_entity" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "base_entity" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "base_entity" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "base_entity" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lists_group" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "lists_group" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lists_group" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "lists_group" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "imageUrl" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sub_task" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "sub_task" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sub_task" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "sub_task" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "attachment" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "attachment" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "friendship" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "friendship" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "friendship" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "friendship" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "attachment" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "attachment" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sub_task" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "sub_task" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sub_task" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "sub_task" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "imageUrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lists_group" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "lists_group" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lists_group" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "lists_group" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "base_entity" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "base_entity" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "base_entity" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "base_entity" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}

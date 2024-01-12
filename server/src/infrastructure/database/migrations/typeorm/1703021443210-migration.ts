import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1703021443210 implements MigrationInterface {
    name = 'Migration1703021443210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."sub_task_status_enum" AS ENUM('TO DO', 'DONE')`);
        await queryRunner.query(`CREATE TABLE "sub_task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "note" text, "status" "public"."sub_task_status_enum" NOT NULL DEFAULT 'TO DO', "taskId" uuid, CONSTRAINT "PK_ccb15801cf521e9c45237f484c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attachment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "fileUrl" text NOT NULL, "taskId" uuid, CONSTRAINT "PK_d2a80c3a8d467f08a750ac4b420" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."task_repeat_enum" AS ENUM('UNSET', 'DAILY', 'WEEKDAYS', 'WEEKLY', 'MONTHLY', 'YEARLY')`);
        await queryRunner.query(`CREATE TYPE "public"."task_status_enum" AS ENUM('TO DO', 'DONE')`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "note" text, "repeat" "public"."task_repeat_enum" NOT NULL DEFAULT 'UNSET', "status" "public"."task_status_enum" NOT NULL DEFAULT 'TO DO', "dueDate" TIMESTAMP WITH TIME ZONE, "remindDate" TIMESTAMP WITH TIME ZONE, "taskListId" uuid, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_list" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "userId" uuid, "listsGoupId" uuid, CONSTRAINT "PK_e9f70d01f59395c1dfdc633ae37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lists_group" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "userId" uuid, CONSTRAINT "PK_cdc3095029ba57e3ab04c5290aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "email" text NOT NULL, "nickname" text NOT NULL, "firstname" text NOT NULL, "lastname" text NOT NULL, "password" text NOT NULL, "salt" text NOT NULL, "imageUrl" text NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."friendship_status_enum" AS ENUM('PENDING', 'ACCEPTED', 'DENIED')`);
        await queryRunner.query(`CREATE TABLE "friendship" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "status" "public"."friendship_status_enum" NOT NULL DEFAULT 'PENDING', "user_id_1" uuid, "user_id_2" uuid, CONSTRAINT "PK_dbd6fb568cd912c5140307075cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_friends_user" ("user_id_1" uuid NOT NULL, "user_id_2" uuid NOT NULL, CONSTRAINT "PK_485ae269dac9d6c71265fef77fb" PRIMARY KEY ("user_id_1", "user_id_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5e529da8ec76673f40d62a3e7a" ON "user_friends_user" ("user_id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_4624fae47508971393c9db431b" ON "user_friends_user" ("user_id_2") `);
        await queryRunner.query(`ALTER TABLE "sub_task" ADD CONSTRAINT "FK_fe51338fd9567d08ae3ab4d5a57" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attachment" ADD CONSTRAINT "FK_611282e10752b2ecbd5c8525ab5" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_47fc40cc98de35bf7aaaaaeeac5" FOREIGN KEY ("taskListId") REFERENCES "task_list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD CONSTRAINT "FK_d34f2d64706c6a8188a6446678b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task_list" ADD CONSTRAINT "FK_f4ca381ce539b9b73c842d9eb1b" FOREIGN KEY ("listsGoupId") REFERENCES "lists_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lists_group" ADD CONSTRAINT "FK_d42a20ed20b56833187cc23e72b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD CONSTRAINT "FK_d1051f253d57d8da09bfc0284af" FOREIGN KEY ("user_id_1") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "friendship" ADD CONSTRAINT "FK_cfc181862f8099243508548231c" FOREIGN KEY ("user_id_2") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_friends_user" ADD CONSTRAINT "FK_5e529da8ec76673f40d62a3e7a0" FOREIGN KEY ("user_id_1") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_friends_user" ADD CONSTRAINT "FK_4624fae47508971393c9db431b1" FOREIGN KEY ("user_id_2") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_friends_user" DROP CONSTRAINT "FK_4624fae47508971393c9db431b1"`);
        await queryRunner.query(`ALTER TABLE "user_friends_user" DROP CONSTRAINT "FK_5e529da8ec76673f40d62a3e7a0"`);
        await queryRunner.query(`ALTER TABLE "friendship" DROP CONSTRAINT "FK_cfc181862f8099243508548231c"`);
        await queryRunner.query(`ALTER TABLE "friendship" DROP CONSTRAINT "FK_d1051f253d57d8da09bfc0284af"`);
        await queryRunner.query(`ALTER TABLE "lists_group" DROP CONSTRAINT "FK_d42a20ed20b56833187cc23e72b"`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP CONSTRAINT "FK_f4ca381ce539b9b73c842d9eb1b"`);
        await queryRunner.query(`ALTER TABLE "task_list" DROP CONSTRAINT "FK_d34f2d64706c6a8188a6446678b"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_47fc40cc98de35bf7aaaaaeeac5"`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP CONSTRAINT "FK_611282e10752b2ecbd5c8525ab5"`);
        await queryRunner.query(`ALTER TABLE "sub_task" DROP CONSTRAINT "FK_fe51338fd9567d08ae3ab4d5a57"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4624fae47508971393c9db431b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5e529da8ec76673f40d62a3e7a"`);
        await queryRunner.query(`DROP TABLE "user_friends_user"`);
        await queryRunner.query(`DROP TABLE "friendship"`);
        await queryRunner.query(`DROP TYPE "public"."friendship_status_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "lists_group"`);
        await queryRunner.query(`DROP TABLE "task_list"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TYPE "public"."task_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."task_repeat_enum"`);
        await queryRunner.query(`DROP TABLE "attachment"`);
        await queryRunner.query(`DROP TABLE "sub_task"`);
        await queryRunner.query(`DROP TYPE "public"."sub_task_status_enum"`);
        await queryRunner.query(`DROP TABLE "base_entity"`);
    }

}

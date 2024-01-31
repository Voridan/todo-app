import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { SubTask } from './SubTask';
import { BaseEntity } from './BaseEntity';
import { TaskList } from './TaskList';
import { ERepeatTask, ETaskStatus } from '../../../../domain/enum';
import { Attachment } from './Attachment';

@Entity()
export class Task extends BaseEntity {
  @Column('text')
  name!: string;

  @Column('text', { nullable: true })
  note!: string | null;

  @Column({ type: 'enum', enum: ERepeatTask, default: ERepeatTask.UNSET })
  repeat!: ERepeatTask;

  @Column({ type: 'enum', enum: ETaskStatus, default: ETaskStatus.TODO })
  status!: ETaskStatus;

  @Column('timestamptz', { nullable: true })
  due!: Date | null;

  @Column('timestamptz', { nullable: true })
  remind!: Date | null;

  @ManyToOne(() => TaskList, (taskList) => taskList.tasks)
  taskList!: TaskList | null;

  @OneToMany(() => SubTask, (subtask) => subtask.task)
  subtasks!: SubTask[];

  @OneToMany(() => Attachment, (attachment) => attachment.task)
  attachments!: Attachment[];
}

import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Task } from './Task';

@Entity()
export class Attachment extends BaseEntity {
  @Column('text')
  location!: string;

  @ManyToOne(() => Task, (task) => task.attachments)
  task!: Task;
}

import { Column, Entity, ManyToOne } from 'typeorm';
import { ETaskStatus } from '../../../../domain/enum';
import { BaseEntity } from './BaseEntity';
import { Task } from './Task';

@Entity()
export class SubTask extends BaseEntity {
  @Column('text')
  name!: string;

  @Column({ type: 'enum', enum: ETaskStatus, default: ETaskStatus.TODO })
  status!: ETaskStatus;

  @ManyToOne(() => Task, (task) => task.subtasks)
  task!: Task | null;
}

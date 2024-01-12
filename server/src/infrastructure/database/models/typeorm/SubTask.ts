import { Column, Entity, ManyToOne } from 'typeorm';
import { ETaskStatus } from '../../../../domain/enum';
import { BaseEntity } from './BaseEntity';
import { Task } from './Task';
import { ISubTaskModel } from '../../../../domain/model/subTask/ISubTaskModel';

@Entity()
export class SubTask extends BaseEntity implements ISubTaskModel {
  @Column('text')
  name!: string;

  @Column({ type: 'enum', enum: ETaskStatus, default: ETaskStatus.TODO })
  status!: ETaskStatus;

  @ManyToOne(() => Task, (task) => task.subtasks, { nullable: true })
  task!: Task | null;
}

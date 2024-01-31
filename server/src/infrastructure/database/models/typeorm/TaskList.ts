import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { ListsGroup } from './ListsGroup';
import { Task } from './Task';

@Entity()
export class TaskList extends BaseEntity {
  @Column('text')
  name!: string;

  @ManyToOne(() => User, (user) => user.taskLists)
  user!: User;

  @ManyToOne(() => ListsGroup, (listsGroup) => listsGroup.taskLists, {
    nullable: true,
  })
  listsGroup!: ListsGroup | null;

  @OneToMany(() => Task, (task) => task.taskList)
  tasks!: Task[];
}

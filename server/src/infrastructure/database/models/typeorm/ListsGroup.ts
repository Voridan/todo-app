import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { TaskList } from './TaskList';

@Entity()
export class ListsGroup extends BaseEntity {
  @Column('text')
  name!: string;

  @ManyToOne(() => User, (user) => user.listsGroups)
  user!: User | null;

  @OneToMany(() => TaskList, (taskList) => taskList.listsGroup)
  taskLists!: TaskList[];
}

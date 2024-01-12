import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { TaskList } from './TaskList';
import { IListsGroupModel } from '../../../../domain/model/listsGroup/IListsGroupModel';

@Entity()
export class ListsGroup extends BaseEntity implements IListsGroupModel {
  @Column('text')
  name!: string;

  @ManyToOne(() => User, (user) => user.listsGroups, { nullable: true })
  user!: User | null;

  @OneToMany(() => TaskList, (taskList) => taskList.listsGoup)
  taskLists!: TaskList[];
}

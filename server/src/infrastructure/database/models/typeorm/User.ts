import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ListsGroup } from './ListsGroup';
import { TaskList } from './TaskList';

@Entity()
export class User extends BaseEntity {
  @Column('text', { unique: true, nullable: false })
  email!: string;

  @Column('text', { unique: true, nullable: false })
  nickname!: string;

  @Column('text')
  firstname!: string;

  @Column('text')
  lastname!: string;

  @Column('smallint')
  age!: number;

  @Column('text')
  password!: string;

  @Column('text')
  salt!: string;

  @Column('text', { nullable: true })
  imageUrl!: string;

  @OneToMany(() => ListsGroup, (listsGroup) => listsGroup.user)
  listsGroups!: ListsGroup[] | null;

  @OneToMany(() => TaskList, (taskList) => taskList.user)
  taskLists!: TaskList[];

  @ManyToMany(() => User)
  @JoinTable({
    joinColumn: { name: 'user_id_1', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id_2', referencedColumnName: 'id' },
  })
  friends!: User[];
}

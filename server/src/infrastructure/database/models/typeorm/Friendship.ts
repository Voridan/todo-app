import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { EFriendshipStatus } from '../../../../domain/enum';
import { IFriendshipModel } from '../../../../domain/model/friendship/IFriendshipModel';

@Entity()
export class Friendship extends BaseEntity implements IFriendshipModel {
  @Column({
    type: 'enum',
    enum: EFriendshipStatus,
    default: EFriendshipStatus.PENDING,
  })
  status!: EFriendshipStatus;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id_1' })
  user1!: User;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id_2' })
  user2!: User;
}

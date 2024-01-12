import { EFriendshipStatus } from '../../enum';
import { UserModel } from '../user/UserModel';

export interface IFriendshipModel {
  id: string;
  status: EFriendshipStatus;
  user1: UserModel;
  user2: UserModel;
  created: Date;
  updated: Date;
}

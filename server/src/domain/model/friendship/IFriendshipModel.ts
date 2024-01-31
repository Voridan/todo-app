import { EFriendshipStatus } from '../../enum';
import { IUserModel } from '../user/IUserModel';

export interface IFriendshipModel {
  id: string;
  status: EFriendshipStatus;
  user1: IUserModel;
  user2: IUserModel;
  created: Date;
  updated: Date;
}

import { EFriendshipStatus } from '../../enum';
import { UserModel } from '../user/UserModel';
import { IFriendshipModel } from './IFriendshipModel';

export class FriendshipModel implements IFriendshipModel {
  constructor(
    public readonly id: string,
    public readonly status: EFriendshipStatus,
    public readonly user1: UserModel,
    public readonly user2: UserModel,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

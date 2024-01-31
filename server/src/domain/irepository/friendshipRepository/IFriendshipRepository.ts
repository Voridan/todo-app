import { FriendshipModel } from '../../model/friendship/FriendshipModel';
import { UpdateFriendshipDto } from './DTO/UpdateFriendshipDto';

export interface IFriendshipRepository {
  add(friendship: FriendshipModel): Promise<FriendshipModel>;
  getById(id: string): Promise<FriendshipModel>;
  update(id: string, data: UpdateFriendshipDto): Promise<FriendshipModel>;
  delete(id: string): Promise<void>;
}

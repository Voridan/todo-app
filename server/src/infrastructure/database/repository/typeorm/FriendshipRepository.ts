import { UpdateFriendshipDto } from '../../../../domain/irepository/friendshipRepository/DTO/UpdateFriendshipDto';
import { IFriendshipRepository } from '../../../../domain/irepository/friendshipRepository/IFriendshipRepository';
import { FriendshipModel } from '../../../../domain/model/friendship/FriendshipModel';

export class FriendshipRepository implements IFriendshipRepository {
  add(friendship: FriendshipModel): Promise<FriendshipModel> {
    throw new Error('Method not implemented.');
  }

  getById(id: string): Promise<FriendshipModel> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: UpdateFriendshipDto): Promise<FriendshipModel> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

import { EFriendshipStatus } from '../../../enum';

export class UpdateFriendshipDto {
  constructor(public readonly status: EFriendshipStatus) {}
}

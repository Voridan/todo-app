import { FriendModel } from '../friendship/FriendModel';
import { ListsGroupModel } from '../listsGroup/ListsGroupModel';
import { TaskListModel } from '../taskList/TaskListModel';

export class UserModel {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly nickname: string,
    public readonly firstname: string,
    public readonly lastname: string,
    public readonly password: string,
    public readonly age: number,
    public readonly imageUrl: string,
    public readonly listGroups: ListsGroupModel[] | null,
    public readonly taskLists: TaskListModel[],
    public readonly friends: FriendModel[]
  ) {}
}

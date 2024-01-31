import { TaskListModel } from '../taskList/TaskListModel';
import { UserModel } from '../user/UserModel';

export class ListsGroupModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly user: UserModel,
    public readonly taskLists: TaskListModel[]
  ) {}
}

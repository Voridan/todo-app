import { ListsGroupModel } from '../listsGroup/ListsGroupModel';
import { TaskModel } from '../task/TaskModel';
import { UserModel } from '../user/UserModel';

export class TaskListModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly user: UserModel,
    public readonly tasks: TaskModel[],
    public readonly listsGroup: ListsGroupModel | null,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

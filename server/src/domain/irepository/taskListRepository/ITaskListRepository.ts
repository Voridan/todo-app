import { TaskListModel } from '../../model/taskList/TaskListModel';
import { IUserModel } from '../../model/user/IUserModel';
import { NewTaskListDto } from './DTO/NewTaskListDto';
import { UpdateTaskListDto } from './DTO/UpdateTaskListDto';

export interface ITaskListRepository {
  add(task: NewTaskListDto): Promise<TaskListModel>;
  getById(id: string): Promise<TaskListModel | null>;
  getAll(user: IUserModel): Promise<TaskListModel[]>;
  update(id: string, updTask: UpdateTaskListDto): Promise<TaskListModel | null>;
  delete(id: string): Promise<void>;
}

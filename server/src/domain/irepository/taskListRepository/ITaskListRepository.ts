import { TaskListModel } from '../../model/taskList/TaskListModel';
import { UserModel } from '../../model/user/UserModel';
import { NewTaskListDto } from './DTO/NewTaskListDto';
import { UpdateTaskListDto } from './DTO/UpdateTaskListDto';

export interface ITaskListRepository {
  add(task: NewTaskListDto): Promise<TaskListModel>;
  getById(id: string): Promise<TaskListModel | null>;
  getAll(user: UserModel): Promise<TaskListModel[]>;
  update(id: string, updTask: UpdateTaskListDto): Promise<TaskListModel | null>;
  delete(id: string): Promise<void>;
}

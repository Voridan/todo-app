import { TaskModel } from '../../model/task/TaskModel';
import { ITaskListModel } from '../../model/taskList/ITaskModel';
import { NewTaskDto } from './DTO/NewTaskDto';
import { UpdateTaskDto } from './DTO/UpdateTaskDto';

export interface ITaskRepository {
  add(task: NewTaskDto): Promise<TaskModel>;
  getById(id: string): Promise<TaskModel | null>;
  getAll(taskList: ITaskListModel): Promise<TaskModel[]>;
  update(id: string, updTask: UpdateTaskDto): Promise<TaskModel | null>;
  delete(id: string): Promise<void>;
}

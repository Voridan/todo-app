import { SubTaskModel } from '../../model/subTask/SubTaskModel';
import { ITaskModel } from '../../model/task/ITaskModel';
import { NewSubTaskDto } from './DTO/NewSubTaskDto';
import { UpdateSubTaskDto } from './DTO/UpdateSubTaskDto';

export interface ISubTaskRepository {
  add(task: NewSubTaskDto): Promise<SubTaskModel>;
  getById(id: string): Promise<SubTaskModel | null>;
  getAll(task: ITaskModel): Promise<SubTaskModel[]>;
  update(id: string, updTask: UpdateSubTaskDto): Promise<SubTaskModel | null>;
  delete(id: string): Promise<void>;
}

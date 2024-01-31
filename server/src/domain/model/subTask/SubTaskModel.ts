import { ETaskStatus } from '../../enum';
import { TaskModel } from '../task/TaskModel';

export class SubTaskModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: ETaskStatus,
    public readonly task: TaskModel,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

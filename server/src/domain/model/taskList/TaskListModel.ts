import { ITaskListModel } from './ITaskModel';

export class TaskListModel implements ITaskListModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

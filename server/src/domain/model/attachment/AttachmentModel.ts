import { TaskModel } from '../task/TaskModel';

export class AttachmentModel {
  constructor(
    public readonly id: string,
    public readonly location: string,
    public readonly task: TaskModel,
    public readonly updated: Date,
    public readonly created: Date
  ) {}
}

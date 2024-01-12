import { ERepeatTask, ETaskStatus } from '../../enum';
import { ITaskModel } from './ITaskModel';

export class TaskModel implements ITaskModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly note: string | null,
    public readonly repeat: ERepeatTask,
    public readonly status: ETaskStatus,
    public readonly created: Date,
    public readonly due: Date | null,
    public readonly remind: Date | null
  ) {}
}

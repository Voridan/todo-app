import { ERepeatTask, ETaskStatus } from '../../enum';
import { AttachmentModel } from '../attachment/AttachmentModel';
import { SubTaskModel } from '../subTask/SubTaskModel';

export class TaskModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly note: string | null,
    public readonly repeat: ERepeatTask,
    public readonly status: ETaskStatus,
    public readonly due: Date | null,
    public readonly remind: Date | null,
    public readonly subtasks: SubTaskModel[] | null,
    public readonly attachments: AttachmentModel[] | null,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

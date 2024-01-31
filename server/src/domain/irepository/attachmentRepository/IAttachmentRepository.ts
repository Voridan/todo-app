import { AttachmentModel } from '../../model/attachment/AttachmentModel';
import { TaskModel } from '../../model/task/TaskModel';
import { NewAttachmentDto } from './DTO/NewAttachmentDto';

export interface IAttachmentReopsitory {
  add(attachment: NewAttachmentDto): Promise<AttachmentModel>;
  getById(id: string): Promise<AttachmentModel | null>;
  getAll(task: TaskModel): Promise<AttachmentModel[]>;
  update(attachment: AttachmentModel): Promise<AttachmentModel | null>;
  delete(id: string): Promise<void>;
}

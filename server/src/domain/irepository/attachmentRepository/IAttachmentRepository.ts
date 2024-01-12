import { AttachmentModel } from '../../model/attachment/AttachmentModel';
import { ITaskModel } from '../../model/task/ITaskModel';
import { NewAttachmentDto } from './DTO/NewAttachmentDto';

export interface IAttachmentReopsitory {
  add(attachment: NewAttachmentDto): Promise<AttachmentModel>;
  getById(id: string): Promise<AttachmentModel | null>;
  getAll(task: ITaskModel): Promise<AttachmentModel[]>;
  update(attachment: AttachmentModel): Promise<AttachmentModel | null>;
  delete(id: string): Promise<void>;
}

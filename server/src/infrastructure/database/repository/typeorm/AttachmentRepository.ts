import { NewAttachmentDto } from '../../../../domain/irepository/attachmentRepository/DTO/NewAttachmentDto';
import { IAttachmentReopsitory } from '../../../../domain/irepository/attachmentRepository/IAttachmentRepository';
import { AttachmentModel } from '../../../../domain/model/attachment/AttachmentModel';
import { ITaskModel } from '../../../../domain/model/task/ITaskModel';

export class AttachmentRepository implements IAttachmentReopsitory {
  constructor() {}

  add(attachment: NewAttachmentDto): Promise<AttachmentModel> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<AttachmentModel | null> {
    throw new Error('Method not implemented.');
  }
  getAll(task: ITaskModel): Promise<AttachmentModel[]> {
    throw new Error('Method not implemented.');
  }
  update(attachment: AttachmentModel): Promise<AttachmentModel | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

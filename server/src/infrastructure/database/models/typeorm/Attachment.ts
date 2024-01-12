import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Task } from './Task';
import { IAttachmentModel } from '../../../../domain/model/attachment/IAttachmentModel';

@Entity()
export class Attachment extends BaseEntity implements IAttachmentModel {
  @Column('text')
  location!: string;

  @ManyToOne(() => Task, (task) => task.attachments, { nullable: true })
  task!: Task | null;
}

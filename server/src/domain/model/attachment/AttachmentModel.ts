import { IAttachmentModel } from './IAttachmentModel';

export class AttachmentModel implements IAttachmentModel {
  constructor(
    readonly id: string,
    readonly location: string
  ) {}
}

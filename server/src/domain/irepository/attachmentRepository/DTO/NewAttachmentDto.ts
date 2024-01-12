export class NewAttachmentDto {
  constructor(readonly location: string) {}

  public get fields() {
    return { location: this.location };
  }
}

export class NewListGroupDto {
  constructor(readonly name: string) {}

  public get fields() {
    return { name: this.name };
  }
}

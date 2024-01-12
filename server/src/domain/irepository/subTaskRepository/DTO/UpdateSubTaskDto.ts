import { ETaskStatus } from '../../../enum';

export class UpdateSubTaskDto {
  constructor(
    readonly name: string,
    readonly status: ETaskStatus
  ) {}

  public get fields() {
    return { name: this.name, status: this.status };
  }
}

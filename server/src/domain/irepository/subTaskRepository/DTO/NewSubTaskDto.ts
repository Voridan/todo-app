import { ETaskStatus } from '../../../enum';

export class NewSubTaskDto {
  constructor(
    readonly name: string,
    readonly status: ETaskStatus
  ) {}
}

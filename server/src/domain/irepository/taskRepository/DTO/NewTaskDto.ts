import { ERepeatTask, ETaskStatus } from '../../../enum';

export class NewTaskDto {
  constructor(
    readonly name: string,
    readonly note: string,
    readonly repeat: ERepeatTask,
    readonly status: ETaskStatus,
    readonly dueDate: Date | null,
    readonly remindDate: Date | null
  ) {}

  public get fields() {
    return {
      name: this.name,
      note: this.note,
      repeat: this.repeat,
      status: this.status,
      dueDate: this.dueDate,
      remindDate: this.remindDate,
    };
  }
}

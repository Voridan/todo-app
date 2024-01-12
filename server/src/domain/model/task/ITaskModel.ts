import { ERepeatTask, ETaskStatus } from '../../enum';

export interface ITaskModel {
  id: string;
  name: string;
  note: string | null;
  repeat: ERepeatTask;
  status: ETaskStatus;
  created: Date;
  due: Date | null;
  remind: Date | null;
}

import { ETaskStatus } from '../../enum';

export interface ISubTaskModel {
  id: string;
  name: string;
  status: ETaskStatus;
  created: Date;
  updated: Date;
}

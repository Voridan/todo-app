import { ETaskStatus } from '../../enum';
import { ISubTaskModel } from './ISubTaskModel';

export class SubTaskModel implements ISubTaskModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: ETaskStatus,
    public readonly created: Date,
    public readonly updated: Date
  ) {}
}

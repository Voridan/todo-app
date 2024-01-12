import { IUserModel } from './IUserModel';

export class UserModel implements IUserModel {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly nickname: string,
    public readonly firstname: string,
    public readonly lastname: string,
    public readonly age: number,
    public readonly imageUrl: string
  ) {}
}

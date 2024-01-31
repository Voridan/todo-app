export class FriendModel {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly nickname: string,
    public readonly firstname: string,
    public readonly lastname: string
  ) {}
}

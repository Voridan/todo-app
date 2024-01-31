import { removeUndefinedProperties } from '../../../utils/functions';

export class UpdateUserDto {
  constructor(
    readonly email?: string,
    readonly nickname?: string,
    readonly firstname?: string,
    readonly lastname?: string,
    readonly imageUrl?: string,
    readonly password?: string,
    readonly salt?: string
  ) {}

  public getFieldsAsObject() {
    return removeUndefinedProperties({
      email: this.email,
      nickname: this.nickname,
      firstname: this.firstname,
      lastname: this.lastname,
      imageUrl: this.imageUrl,
      password: this.password,
      salt: this.salt,
    });
  }
}

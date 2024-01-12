export class NewUserDto {
  constructor(
    readonly email: string,
    readonly nickname: string,
    readonly firstname: string,
    readonly lastname: string,
    readonly age: number,
    readonly password: string,
    readonly salt: string,
    readonly imageUrl?: string
  ) {}

  public get fields() {
    return {
      email: this.email,
      nickname: this.nickname,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      password: this.password,
      salt: this.salt,
      imageUrl: this.imageUrl ?? '',
    };
  }
}

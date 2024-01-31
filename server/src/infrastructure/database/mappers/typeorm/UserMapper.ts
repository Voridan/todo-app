import { UserModel } from '../../../../domain/model/user/UserModel';
import { User } from '../../models/typeorm/User';
import { IModelMapper } from '../IModelsMapper';

export class UserMapper implements IModelMapper<UserModel, User> {
  toDomain(entity: User): UserModel {
    return new UserModel(
      entity.id,
      entity.email,
      entity.nickname,
      entity.firstname,
      entity.lastname,
      entity.age,
      entity.imageUrl
    );
  }

  toEntity(domain: UserModel): User {
    const userEntity = new User();
    userEntity.id = domain.id;
    userEntity.email = domain.email;
    userEntity.nickname = domain.nickname;
    userEntity.firstname = domain.firstname;
    userEntity.lastname = domain.lastname;
    userEntity.age = domain.age;
    userEntity.imageUrl = domain.imageUrl;

    return userEntity;
  }
}

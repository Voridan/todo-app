import { Repository } from 'typeorm';
import { NewUserDto } from '../../../../domain/irepository/userRepository/DTO/NewUserDto';
import { UpdateUserDto } from '../../../../domain/irepository/userRepository/DTO/UpdateUserDto';
import { UserModel } from '../../../../domain/model/user/UserModel';
import { IUserRepository } from '../../../../domain/irepository/userRepository/IUserRepository';
import { AppDataSource } from '../../config/typeorm/dataSource';
import { User } from '../../models/typeorm/User';
import { UserMapper } from '../../mappers/typeorm/UserMapper';

export class UserRepository implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  public async add(user: NewUserDto): Promise<UserModel> {
    const newUser = this.userRepo.create(user.fields);
    const insertResult = await this.userRepo.insert(newUser);

    if (insertResult.identifiers.length)
      return new UserMapper().toDomain(newUser);
    else
      throw new Error(
        `Insertion of a task ${
          newUser.id
        }   failed. ${newUser.created.toDateString()}`
      );
  }

  public async getById(id: string): Promise<UserModel | null> {
    const user = await this.userRepo.findOneBy({ id });
    if (user) {
      return new UserMapper().toDomain(user);
    }

    return null;
  }

  public async getByEmail(email: string): Promise<UserModel | null> {
    const user = await this.userRepo.findOneBy({ email });
    if (user) {
      return new UserMapper().toDomain(user);
    }

    return null;
  }

  public async getAll(): Promise<UserModel[]> {
    const users = await this.userRepo.find();
    const mapper = new UserMapper();
    return users.map((u) => mapper.toDomain(u));
  }

  public async update(
    id: string,
    updUser: UpdateUserDto
  ): Promise<UserModel | null> {
    const userExists = await this.userRepo.exist({ where: { id } });
    if (userExists) {
      const data = updUser.getFieldsAsObject();
      await this.userRepo.update(id, data);
      const updatedUser = await this.userRepo.findOneBy({ id });
      return new UserMapper().toDomain(updatedUser!);
    }

    return null;
  }

  public async delete(id: string): Promise<void> {
    const userExists = await this.userRepo.exist({ where: { id } });
    if (userExists) {
      await this.userRepo.delete(id);
    }
  }
}

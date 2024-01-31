import { UserModel } from '../../model/user/UserModel';
import { NewUserDto } from './DTO/NewUserDto';
import { UpdateUserDto } from './DTO/UpdateUserDto';

export interface IUserRepository {
  add(user: NewUserDto): Promise<UserModel>;
  getById(id: string): Promise<UserModel | null>;
  getByEmail(email: string): Promise<UserModel | null>;
  getAll(): Promise<UserModel[]>;
  update(id: string, data: UpdateUserDto): Promise<UserModel | null>;
  delete(id: string): Promise<void>;
}

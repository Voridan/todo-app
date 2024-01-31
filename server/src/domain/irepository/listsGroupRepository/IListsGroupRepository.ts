import { ListsGroupModel } from '../../model/listsGroup/ListsGroupModel';
import { UserModel } from '../../model/user/UserModel';
import { NewListGroupDto } from './DTO/NewListGroupDto';
import { UpdateListGroupDto } from './DTO/UpdateListGroupDto';

export interface IListsGroupRepository {
  add(listsGroup: NewListGroupDto): Promise<ListsGroupModel>;
  getById(id: string): Promise<ListsGroupModel | null>;
  getAll(user: UserModel): Promise<ListsGroupModel[]>;
  update(id: string, data: UpdateListGroupDto): Promise<null>;
  delete(id: string): Promise<void>;
}

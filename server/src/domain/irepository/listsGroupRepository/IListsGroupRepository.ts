import { ListsGroupModel } from '../../model/listsGroup/ListsGroupModel';
import { IUserModel } from '../../model/user/IUserModel';
import { NewListGroupDto } from './DTO/NewListGroupDto';
import { UpdateListGroupDto } from './DTO/UpdateListGroupDto';

export interface IListsGroupRepository {
  add(listsGroup: NewListGroupDto): Promise<ListsGroupModel>;
  getById(id: string): Promise<ListsGroupModel | null>;
  getAll(user: IUserModel): Promise<ListsGroupModel[]>;
  update(id: string, data: UpdateListGroupDto): Promise<null>;
  delete(id: string): Promise<void>;
}

import { TaskListModel } from '../../../../domain/model/taskList/TaskListModel';
import { TaskList } from '../../models/typeorm/TaskList';
import { IModelMapper } from '../IModelsMapper';

export class TaskListMapper implements IModelMapper<TaskListModel, TaskList> {
  toDomain(entity: TaskList): TaskListModel {
    return new TaskListModel(
      entity.id,
      entity.name,
      entity.created,
      entity.updated
    );
  }

  toEntity(domain: TaskListModel): TaskList {
    const entity = new TaskList();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.created = domain.created;
    entity.updated = domain.updated;

    return entity;
  }
}

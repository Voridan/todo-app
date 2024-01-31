import { SubTaskModel } from '../../../../domain/model/subTask/SubTaskModel';
import { SubTask } from '../../models/typeorm/SubTask';
import { IModelMapper } from '../IModelsMapper';

export class SubTaskMapper implements IModelMapper<SubTaskModel, SubTask> {
  toDomain(entity: SubTask): SubTaskModel {
    return new SubTaskModel(
      entity.id,
      entity.name,
      entity.status,
      entity.created,
      entity.updated
    );
  }

  toEntity(domain: SubTaskModel): SubTask {
    const taskEntity = new SubTask();
    taskEntity.id = domain.id;
    taskEntity.name = domain.name;
    taskEntity.status = domain.status;
    taskEntity.created = domain.created;
    taskEntity.updated = domain.updated;

    return taskEntity;
  }
}

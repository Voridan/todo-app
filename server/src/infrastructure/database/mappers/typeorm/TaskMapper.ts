import { TaskModel } from '../../../../domain/model/task/TaskModel';
import { Task } from '../../models/typeorm/Task';
import { IModelMapper } from '../IModelsMapper';

export class TaskMapper implements IModelMapper<TaskModel, Task> {
  toDomain(entity: Task): TaskModel {
    return new TaskModel(
      entity.id,
      entity.name,
      entity.note,
      entity.repeat,
      entity.status,
      entity.created,
      entity.due,
      entity.remind
    );
  }

  toEntity(domain: TaskModel): Task {
    const taskEntity = new Task();
    taskEntity.id = domain.id;
    taskEntity.name = domain.name;
    taskEntity.note = domain.note;
    taskEntity.repeat = domain.repeat;
    taskEntity.status = domain.status;
    taskEntity.created = domain.created;
    taskEntity.due = domain.due;
    taskEntity.remind = domain.remind;

    return taskEntity;
  }
}

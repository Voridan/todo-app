import { Repository } from 'typeorm';
import { NewSubTaskDto } from '../../../../domain/irepository/subTaskRepository/DTO/NewSubTaskDto';
import { UpdateSubTaskDto } from '../../../../domain/irepository/subTaskRepository/DTO/UpdateSubTaskDto';
import { ISubTaskRepository } from '../../../../domain/irepository/subTaskRepository/ISubTaskRepository';
import { SubTaskModel } from '../../../../domain/model/subTask/SubTaskModel';
import { SubTask } from '../../models/typeorm/SubTask';
import { AppDataSource } from '../../config/typeorm/dataSource';
import { SubTaskMapper } from '../../mappers/typeorm/SubTaskMapper';
import { Task } from '../../models/typeorm/Task';

export class SubTaskRepository implements ISubTaskRepository {
  private readonly subTaskRepo: Repository<SubTask>;

  constructor() {
    this.subTaskRepo = AppDataSource.getRepository(SubTask);
  }

  async add(task: NewSubTaskDto): Promise<SubTaskModel> {
    const newSubTask = this.subTaskRepo.create({
      name: task.name,
      status: task.status,
    });
    const insertResult = await this.subTaskRepo.insert(newSubTask);
    if (insertResult.identifiers.length) {
      return new SubTaskMapper().toDomain(newSubTask);
    } else {
      throw new Error(
        `Insertion of a task ${
          newSubTask.id
        } failed. ${newSubTask.created.toDateString()}`
      );
    }
  }

  async getById(id: string): Promise<SubTaskModel | null> {
    const subTask = await this.subTaskRepo.findOneBy({ id });
    if (subTask) {
      return new SubTaskMapper().toDomain(subTask);
    }

    return null;
  }

  async getAll(task: Task): Promise<SubTaskModel[]> {
    const subtaskLists = await this.subTaskRepo.find({
      relations: ['task', 'sub_task'],
      where: { id: task.id },
    });
    const mapper = new SubTaskMapper();

    return subtaskLists.map((subTask) => mapper.toDomain(subTask));
  }

  async update(
    id: string,
    updTask: UpdateSubTaskDto
  ): Promise<SubTaskModel | null> {
    const taskExists = await this.subTaskRepo.exist({ where: { id } });
    if (taskExists) {
      await this.subTaskRepo.update(id, updTask.fields);
      const updated = await this.subTaskRepo.findOneBy({ id });
      return new SubTaskMapper().toDomain(updated!);
    }

    return null;
  }

  async delete(id: string): Promise<void> {
    const subTaskExists = await this.subTaskRepo.exist({ where: { id } });
    if (subTaskExists) {
      await this.subTaskRepo.delete(id);
    }
  }
}

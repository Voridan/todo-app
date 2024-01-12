import { Repository } from 'typeorm';
import { UpdateTaskDto } from '../../../../domain/irepository/taskRepository/DTO/UpdateTaskDto';
import { ITaskRepository } from '../../../../domain/irepository/taskRepository/ITaskRepository';
import { TaskModel } from '../../../../domain/model/task/TaskModel';
import { Task } from '../../models/typeorm/Task';
import { AppDataSource } from '../../config/typeorm/dataSource';
import { NewTaskDto } from '../../../../domain/irepository/taskRepository/DTO/NewTaskDto';
import { TaskMapper } from '../../mappers/typeorm/TaskMapper';
import { TaskList } from '../../models/typeorm/TaskList';

export class TaskRepository implements ITaskRepository {
  private readonly taskRepo: Repository<Task>;

  constructor() {
    this.taskRepo = AppDataSource.getRepository(Task);
  }

  async add(task: NewTaskDto): Promise<TaskModel> {
    const taskEntity = this.taskRepo.create(task.fields);
    await this.taskRepo.insert(taskEntity);

    const insertResult = await this.taskRepo.insert(taskEntity);
    if (insertResult.identifiers.length)
      return new TaskMapper().toDomain(taskEntity);
    else
      throw new Error(
        `Insertion of a task ${
          taskEntity.id
        }   failed. ${taskEntity.created.toDateString()}`
      );

    return new TaskMapper().toDomain(taskEntity);
  }

  async getById(id: string): Promise<TaskModel | null> {
    const task = await this.taskRepo.findOneBy({ id });
    if (task) {
      return new TaskMapper().toDomain(task);
    }

    return null;
  }

  async getAll(taskList: TaskList): Promise<TaskModel[]> {
    const tasks = await this.taskRepo.find({
      relations: ['task_list', 'task'],
      where: { id: taskList.id },
    });
    const mapper = new TaskMapper();

    return tasks.map((task) => mapper.toDomain(task));
  }

  async update(id: string, updTask: UpdateTaskDto): Promise<TaskModel | null> {
    const taskExists = await this.taskRepo.exist({ where: { id } });
    if (taskExists) {
      await this.taskRepo.update(id, updTask.fields);
      const updatedTask = await this.taskRepo.findOneBy({ id });

      return new TaskMapper().toDomain(updatedTask!);
    }

    return null;
  }

  async delete(id: string): Promise<void> {
    const taskExists = await this.taskRepo.exist({ where: { id } });
    if (taskExists) {
      await this.taskRepo.delete(id);
    }
  }
}

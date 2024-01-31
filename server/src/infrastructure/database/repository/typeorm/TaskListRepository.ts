import { Repository } from 'typeorm';
import { NewTaskListDto } from '../../../../domain/irepository/taskListRepository/DTO/NewTaskListDto';
import { UpdateTaskListDto } from '../../../../domain/irepository/taskListRepository/DTO/UpdateTaskListDto';
import { ITaskListRepository } from '../../../../domain/irepository/taskListRepository/ITaskListRepository';
import { TaskListModel } from '../../../../domain/model/taskList/TaskListModel';
import { TaskList } from '../../models/typeorm/TaskList';
import { AppDataSource } from '../../config/typeorm/dataSource';
import { TaskListMapper } from '../../mappers/typeorm/TaskListMapper';
import { User } from '../../models/typeorm/User';

export class TaskListRepository implements ITaskListRepository {
  private readonly taskListRepo: Repository<TaskList>;

  constructor() {
    this.taskListRepo = AppDataSource.getRepository(TaskList);
  }

  public async add(task: NewTaskListDto): Promise<TaskListModel> {
    const newTaskList = this.taskListRepo.create({
      name: task.name,
    });
    const insertResult = await this.taskListRepo.insert(newTaskList);
    if (insertResult.identifiers.length) {
      return new TaskListMapper().toDomain(newTaskList);
    } else {
      throw new Error(
        `Insertion of a task ${
          newTaskList.id
        }   failed. ${newTaskList.created.toDateString()}`
      );
    }
  }

  public async getAll(user: User): Promise<TaskListModel[]> {
    const taskLists = await this.taskListRepo.find({
      relations: ['task_list', 'user'],
      where: { user: { id: user.id } },
    });
    const mapper = new TaskListMapper();

    return taskLists.map((taskList) => mapper.toDomain(taskList));
  }

  public async getById(id: string): Promise<TaskListModel | null> {
    const taskList = await this.taskListRepo.findOneBy({ id });
    if (taskList) {
      return new TaskListMapper().toDomain(taskList);
    }

    return null;
  }

  public async update(
    id: string,
    updTaskList: UpdateTaskListDto
  ): Promise<TaskListModel | null> {
    const taskListExists = await this.taskListRepo.exist({ where: { id } });
    if (taskListExists) {
      await this.taskListRepo.update(id, { name: updTaskList.name });
      const updatedTaskList = await this.taskListRepo.findOneBy({ id });
      return new TaskListMapper().toDomain(updatedTaskList!);
    }

    return null;
  }

  public async delete(id: string): Promise<void> {
    const taskListExists = await this.taskListRepo.exist({ where: { id } });
    if (taskListExists) {
      await this.taskListRepo.delete(id);
    }
  }
}

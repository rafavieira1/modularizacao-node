import { TaskRepository } from '../repository/TaskRepository';
import { CreateTaskDTO } from '../dto/CreateTaskDTO';
import { Task } from '../dto/Task';
import { AppError } from '../../../shared/middlewares/errorHandler';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async create(data: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.create(data);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async findById(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    return task;
  }

  async findByUserId(userId: string): Promise<Task[]> {
    return this.taskRepository.findByUserId(userId);
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    await this.findById(id); // Verifica se a task existe
    return this.taskRepository.update(id, data);
  }

  async toggleComplete(id: string): Promise<Task> {
    const task = await this.findById(id);
    return this.taskRepository.update(id, {
      completed: !task.completed
    });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Verifica se a task existe
    await this.taskRepository.delete(id);
  }
}

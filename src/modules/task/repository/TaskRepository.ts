import { PrismaClient } from '@prisma/client';
import { CreateTaskDTO } from '../dto/CreateTaskDTO';
import { Task } from '../dto/Task';

export class TaskRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    return this.prisma.task.create({
      data: {
        ...data,
        completed: false
      }
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findById(id: string): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id }
    });
  }

  async findByUserId(userId: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: { userId }
    });
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({
      where: { id }
    });
  }
}

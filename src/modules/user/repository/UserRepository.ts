import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { User } from '../dto/User';

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateUserDTO): Promise<User> {
    return this.prisma.user.create({
      data
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }
}

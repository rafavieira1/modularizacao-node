import { User } from '../dto/User';
import { UserRepository } from '../repository/UserRepository';
import { AppError } from '../../../shared/middlewares/errorHandler';
import { CreateUserDTO } from '../dto/CreateUserDTO';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDTO): Promise<User> {
    // Aqui podemos adicionar validações e regras de negócio
    return this.userRepository.create(data);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return this.userRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    await this.userRepository.delete(id);
  }
}

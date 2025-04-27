import { UserRepository } from '../repository/UserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { User } from '../dto/User';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDTO): Promise<User> {
    // Aqui podemos adicionar validações e regras de negócio
    return this.userRepository.create(data);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}

import { Router } from 'express';
import { UserController } from './controller/UserController';
import { UserService } from './service/UserService';
import { UserRepository } from './repository/UserRepository';

const userRoutes = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.post('/', (req, res) => userController.create(req, res));
userRoutes.get('/', (req, res) => userController.findAll(req, res));
userRoutes.get('/:id', (req, res) => userController.findById(req, res));
userRoutes.put('/:id', (req, res) => userController.update(req, res));
userRoutes.delete('/:id', (req, res) => userController.delete(req, res));

export { userRoutes };
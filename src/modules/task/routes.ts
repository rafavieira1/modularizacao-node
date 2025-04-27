import { Router } from 'express';
import { TaskController } from './controller/TaskController';
import { TaskService } from './service/TaskService';
import { TaskRepository } from './repository/TaskRepository';

const taskRoutes = Router();
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

taskRoutes.post('/', (req, res) => taskController.create(req, res));
taskRoutes.get('/', (req, res) => taskController.findAll(req, res));
taskRoutes.get('/:id', (req, res) => taskController.findById(req, res));
taskRoutes.get('/user/:userId', (req, res) => taskController.findByUserId(req, res));
taskRoutes.put('/:id', (req, res) => taskController.update(req, res));
taskRoutes.patch('/:id/toggle', (req, res) => taskController.toggleComplete(req, res));
taskRoutes.delete('/:id', (req, res) => taskController.delete(req, res));

export { taskRoutes };

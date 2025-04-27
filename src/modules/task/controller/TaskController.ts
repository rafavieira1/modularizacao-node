import { Request, Response } from 'express';
import { TaskService } from '../service/TaskService';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const task = await this.taskService.create(req.body);
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await this.taskService.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const task = await this.taskService.findById(req.params.id);
      return res.status(200).json(task);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }

  async findByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await this.taskService.findByUserId(req.params.userId);
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const task = await this.taskService.update(req.params.id, req.body);
      return res.status(200).json(task);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }

  async toggleComplete(req: Request, res: Response): Promise<Response> {
    try {
      const task = await this.taskService.toggleComplete(req.params.id);
      return res.status(200).json(task);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      await this.taskService.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }
}

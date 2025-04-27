import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

export class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.update(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      await this.userService.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  }
}
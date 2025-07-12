import { Request, Response } from 'express';
import {
  createUserService,
  getUserInfoService,
  listUsersService,
  getUserProductsService,
} from '../services/user.service';

export async function createUserController(req: Request, res: Response) {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function listUsersController(_req: Request, res: Response) {
  try {
    const users = await listUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
}

export async function getUserInfoController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserInfoService(id);
    res.json(user);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

export async function getUserProductsController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const products = await getUserProductsService(id);
    res.json(products);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

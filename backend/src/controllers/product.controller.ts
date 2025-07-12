import { Request, Response } from 'express';
import { createProductService } from '../services/product.service';

export async function createProductController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' });

    const product = await createProductService({ ...req.body, userId });
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erro ao criar produto' });
  }
}

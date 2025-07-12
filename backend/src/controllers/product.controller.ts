import { Request, Response } from 'express';
import { createProductService, deleteProductService, getAllProductsService, updateProductService } from '../services/product.service';

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

export async function getAllProductsController(req: Request, res: Response) {
  try {
    const { search, status } = req.query;
    const products = await getAllProductsService(
      search as string,
      status as string
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
}

export async function updateProductController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Não autorizado' });

    const productId = req.params.id;
    const updated = await updateProductService(productId, req.body, userId);
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteProductController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Não autorizado' });

    const productId = req.params.id;
    await deleteProductService(productId, userId);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

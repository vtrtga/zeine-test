import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  updateProductController,
} from '../controllers/product.controller';
import { verifyToken } from '../middlewares/verify-token';
import { validate } from '../middlewares/product';
import { createProductSchema } from '../middlewares/zod/schema/product-schema';
const router = Router();

router.post('/', verifyToken, validate(createProductSchema), createProductController);
router.get('/', getAllProductsController);
router.put('/:id', verifyToken, updateProductController);
router.delete('/:id', verifyToken, deleteProductController);

export default router;

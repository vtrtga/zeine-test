import { Router } from 'express';
import { createProductController } from '../controllers/product.controller';
import { verifyToken } from '../middlewares/verify-token';
import { validate } from '../middlewares/product';
import { createProductSchema } from '../middlewares/zod/schema/product-schema';

const router = Router();

router.post('/', verifyToken, validate(createProductSchema), createProductController);

export default router;

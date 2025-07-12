import { Router } from 'express';
import {
    createUserController,
    getUserInfoController,
    getUserProductsController,
    listUsersController
} from '../controllers/user.controller';

const router = Router();

router.post('/', createUserController);
router.get('/', listUsersController);
router.get('/:id', getUserInfoController);
router.get('/:id/products', getUserProductsController);

export default router;

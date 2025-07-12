import { Product } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, z } from 'zod';

export function validate(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: 'Erro de validação',
        details: z.treeifyError(result.error),
      });
    }

    req.body = result.data;
    next();
  };
}

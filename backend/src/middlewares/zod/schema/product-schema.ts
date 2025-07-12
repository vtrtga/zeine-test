import { z } from 'zod';

export const createProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().url(),
  price: z.number().positive(),
  category: z.string().min(1),
  status: z.enum(['ativo', 'inativo', 'vendido']),
});

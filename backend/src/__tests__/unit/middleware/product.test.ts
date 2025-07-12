import { validate } from '../../../middlewares/product';
import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

describe('Middleware validate()', () => {
  const schema = z.object({
    title: z.string().min(1),
    price: z.number().positive(),
  });

  const getMockRes = () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    return res;
  };

  it('deve permitir request válida e chamar next()', () => {
    const req = {
      body: {
        title: 'Produto Teste',
        price: 100,
      },
    } as Request;

    const res = getMockRes();
    const next = jest.fn() as NextFunction;

    const middleware = validate(schema);
    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('deve bloquear request inválida e retornar erro 400', () => {
    const req = {
      body: {
        title: '',
        price: -1,
      },
    } as Request;

    const res = getMockRes();
    const next = jest.fn() as NextFunction;

    const middleware = validate(schema);
    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      error: 'Erro de validação',
      details: expect.any(Object),
    }));
    expect(next).not.toHaveBeenCalled();
  });
});

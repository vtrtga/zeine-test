import request from 'supertest';
import app from '../../../index';
import prisma from '../../../prisma/client';

describe('User routes', () => {
  beforeAll(async () => {
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve criar um novo usuário', async () => {
    const res = await request(app).post('/user').send({
      name: 'Vitor',
      email: 'vitor@test.com',
      password: '123456',
      phone: '65999999999',
      birthDate: '1998-10-10',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.email).toBe('vitor@test.com');
  });

  it('deve retornar lista de usuários', async () => {
    const res = await request(app).get('/user');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

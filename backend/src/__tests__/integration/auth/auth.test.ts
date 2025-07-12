import request from 'supertest';
import app from '../../../index';
import prisma from '../../../prisma/client';

describe('Auth - Login', () => {
  const testUser = {
    name: 'Usuário Teste',
    email: 'test@auth.com',
    password: '123456',
  };

  beforeAll(async () => {
    // Limpa e recria usuário de teste
    await prisma.user.deleteMany({
      where: { email: testUser.email },
    });

    await request(app).post('/user').send(testUser);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve retornar token com credenciais válidas', async () => {
    const res = await request(app).post('/auth/login').send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user.email).toBe(testUser.email);
  });

  it('deve retornar erro com senha incorreta', async () => {
    const res = await request(app).post('/auth/login').send({
      email: testUser.email,
      password: 'senhaErrada',
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Credenciais inválidas');
  });

  it('deve retornar erro com e-mail inexistente', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'inexistente@teste.com',
      password: 'qualquer',
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Credenciais inválidas');
  });
});

import request from 'supertest';
import app from '../../../index';
import prisma from '../../../prisma/client';

describe('Product routes', () => {
  let productId = '';
  let token = '';

  beforeAll(async () => {
    await prisma.product.deleteMany();
    await prisma.user.deleteMany({
      where: { email: 'produto@test.com' },
    });

    await request(app).post('/user').send({
      name: 'Produto Teste',
      email: 'produto@test.com',
      password: '123456',
    });

    const login = await request(app).post('/auth/login').send({
      email: 'produto@test.com',
      password: '123456',
    });

    token = login.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve criar um novo produto', async () => {
    const res = await request(app)
      .post('/product')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Notebook Gamer',
        description: 'RTX 3060, Ryzen 7',
        imageUrl: 'https://via.placeholder.com/150',
        price: 9999.99,
        category: 'Informática',
        status: 'ativo',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Notebook Gamer');

    productId = res.body.id;
  });

  it('deve retornar todos os produtos', async () => {
    const res = await request(app).get('/product');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('deve filtrar produtos por status', async () => {
    const res = await request(app).get('/product?status=ativo');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].status).toBe('ativo');
  });

  it('deve filtrar produtos por texto no título ou descrição', async () => {
    const res = await request(app).get('/product?search=notebook');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(
      res.body.some((p: any) =>
        p.title.toLowerCase().includes('notebook') ||
        p.description.toLowerCase().includes('notebook')
      )
    ).toBe(true);
  });

  it('deve atualizar um produto com sucesso', async () => {
    const res = await request(app)
      .put(`/product/${productId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Produto Atualizado',
        price: 1234.56,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Produto Atualizado');
    expect(res.body.price).toBe(1234.56);
  });

  it('deve retornar erro ao tentar atualizar produto inexistente', async () => {
    const res = await request(app)
      .put('/product/inexistente')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Qualquer' });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Produto não encontrado/);
  });

  it('deve deletar um produto com sucesso', async () => {
    const res = await request(app)
      .delete(`/product/${productId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(204);

    const check = await prisma.product.findUnique({ where: { id: productId } });
    expect(check).toBeNull();
  });

  it('deve retornar erro ao tentar deletar produto inexistente', async () => {
    const res = await request(app)
      .delete('/product/inexistente')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Produto não encontrado/);
  });
});

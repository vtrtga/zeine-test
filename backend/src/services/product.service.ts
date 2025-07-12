import { Prisma, Product } from '@prisma/client';
import prisma from '../prisma/client';
import { CreateProductInput, PublicProduct } from 'product';

export async function createProductService(data: CreateProductInput): Promise<Product> {
  const product = await prisma.product.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
      category: data.category,
      status: data.status,
      userId: data.userId,
    },
  });

  return product;
}



export async function getAllProductsService(
  search?: string,
  status?: string
): Promise<PublicProduct[]> {
  const filters: Prisma.ProductWhereInput = {};

  if (status) {
    filters.status = status;
  }

  if (search) {
    filters.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  return prisma.product.findMany({
    where: Object.keys(filters).length ? filters : undefined,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      price: true,
      category: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function updateProductService(id: string, data: Partial<Product>, userId: string) {
  const existing = await prisma.product.findUnique({ where: { id } });

  if (!existing) throw new Error('Produto não encontrado');
  if (existing.userId !== userId) throw new Error('Acesso negado');

  return prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProductService(id: string, userId: string) {
  const existing = await prisma.product.findUnique({ where: { id } });

  if (!existing) throw new Error('Produto não encontrado');
  if (existing.userId !== userId) throw new Error('Acesso negado');

  await prisma.product.delete({ where: { id } });
}
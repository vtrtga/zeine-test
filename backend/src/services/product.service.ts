import prisma from '../prisma/client';

export async function createProductService(data: CreateProductInput) {
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

import prisma from '../prisma/client';
import bcrypt from 'bcrypt';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  phone?: string;
  birthDate?: string;
}

export async function checkUserExistsById(id: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id } });
  return !!user;
}

export async function createUserService(data: CreateUserInput) {
  const existingUser = await checkUserExistsById(data.email);

  if (existingUser) {
    throw new Error('Email já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
    },
  });
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
}

export async function listUsersService() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birthDate: true,
      createdAt: true,
    },
  });
}

export async function getUserInfoService(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birthDate: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  return user;
}

export async function getUserProductsService(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      products: {
        select: {
          id: true,
          price: true,
          createdAt: true,
          title: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  return user.products;
}

import prisma from "../prisma/client";
import { comparePassword } from "./utils/compare-password";
import jwt from 'jsonwebtoken'

export async function AuthUserService(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error('Credenciais inválidas');

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) throw new Error('Credenciais inválidas');

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '2h' }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

import { z } from 'zod';

export function validateField(type: string, value: string, path?: string) {
  const passwordText = path === '/user-register' ? 'A senha deve ter no mínimo 6 caracteres.' : 'Digite a senha.';
  const customSchemas = {
  email: z
    .string()
    .nonempty('O e-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),

  cpf: z
    .string()
    .nonempty('O CPF é obrigatório.')
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF deve estar no formato 000.000.000-00'),

  date: z
    .string()
    .nonempty('A data é obrigatória.')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida. Use o formato AAAA-MM-DD.'),

  password: z
    .string()
    .nonempty('A senha é obrigatória.')
    .min(6, passwordText),
};
  const result = customSchemas[type as keyof typeof customSchemas].safeParse(value);
  return result.success ? null : result.error.issues[0].message;
}

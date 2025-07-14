import { z } from 'zod';

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
    .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
};

export function validateField(type: keyof typeof customSchemas, value: string) {
  const result = customSchemas[type].safeParse(value);
  return result.success ? null : result.error.issues[0].message;
}

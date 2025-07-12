import bcrypt from 'bcrypt';

export function comparePassword(plain: string, hashed: string) {
  return bcrypt.compare(plain, hashed);
}

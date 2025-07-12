interface CreateProductInput {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  status: 'ativo' | 'inativo' | 'vendido';
  userId: string; // vem do token
}

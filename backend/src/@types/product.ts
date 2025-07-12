declare module 'product' {
  export interface CreateProductInput {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    category: string;
    status: 'ativo' | 'inativo' | 'vendido';
    userId: string;
  }
  export interface PublicProduct {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    category: string;
    status: string;
    createdAt: Date;
  }
}
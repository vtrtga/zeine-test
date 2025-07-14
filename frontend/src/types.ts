export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface CreateProduct {
  name: string;
  price: number;
  stock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ProductFormValues {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    status: "ativo" | "inativo" | "vendido";
}

export interface UserFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate?: string;
  phone?: string;
}

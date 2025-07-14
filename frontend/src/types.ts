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
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  status: "ativo" | "inativo" | "vendido";
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

export interface Product extends ProductFormValues {
  id: string;
}

export interface UserFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate?: string;
  phone?: string;
}

export enum StatusValues {
  SOLD = "vendido",
  ACTIVE = "ativo",
  INACTIVE = "inativo",
}
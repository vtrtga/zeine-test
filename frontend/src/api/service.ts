import { LoginRequest, LoginResponse, ProductFormValues, User, UserFormValues } from "@/types";
import api from "./api";
import { ENDPOINT } from "./const/api-endpoints";
const withAuth = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await api.post(ENDPOINT.LOGIN, data);
  return res.data;
};

export const getProducts = async (token: string): Promise<ProductFormValues[]> => {
  const res = await api.get(ENDPOINT.PRODUCT, withAuth(token));
  return res.data;
};

export const createProduct = async (data: ProductFormValues, token: string): Promise<ProductFormValues> => {
  const res = await api.post(ENDPOINT.PRODUCT, data, withAuth(token));
  return res.data;
};

export const getUser = async (id: string, token: string): Promise<User> => {
  const res = await api.get(`${ENDPOINT.USER}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const registerUser = async (data: Omit<UserFormValues, "confirmPassword">) => {
  const response = await api.post(ENDPOINT.USER, data);
  return response.data;
};

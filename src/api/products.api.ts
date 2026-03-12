import type { ProductsData, ProductsResponse } from '../types/products';
import { apiClient } from './client';

const PRODUCTS_URL = import.meta.env.VITE_PRODUCTS_API;

export const fetchProducts = async (): Promise<ProductsData> => {
  const { data } = await apiClient.get<ProductsResponse>(PRODUCTS_URL);

  return data.data;
};

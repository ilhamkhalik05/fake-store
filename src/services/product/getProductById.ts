import type { Product } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';

export const getProductsById = async (id: number): Promise<Product | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

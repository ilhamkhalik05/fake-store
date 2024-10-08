import type { Product } from '@/lib/type';
import { API_BASE_URL, handleApiError } from '@/lib/api';

export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!res.ok) {
      handleApiError(`fetch product by id ${id}`, res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

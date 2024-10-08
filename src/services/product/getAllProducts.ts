import type { Product } from '@/lib/type';
import { API_BASE_URL, handleApiError } from '@/lib/api';

type TGetAllProducts = {
  limit?: number;
  sort?: string;
};

export const getAllProducts = async ({
  limit,
  sort,
}: TGetAllProducts): Promise<Product[] | null> => {
  try {
    let additionalParams = '';

    if (limit && sort) {
      additionalParams = `?limit=${limit}&sort=${sort}`;
    } else if (limit) {
      additionalParams = `?limit=${limit}`;
    } else if (sort) {
      additionalParams = `?sort=${sort}`;
    } else {
      additionalParams = '';
    }

    const res = await fetch(`${API_BASE_URL}/products${additionalParams}`);

    if (!res.ok) {
      handleApiError('fetch all product', res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

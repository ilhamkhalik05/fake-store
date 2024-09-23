import type { Product } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';
import { handleApiError } from '@/lib/utils';

const categories = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  "men's clothing": "men's%20clothing",
  "women's clothing": "women's%20clothing",
} as const;

export type Category = keyof typeof categories;

export const getProductsByCategory = async ({
  category,
}: {
  category: Category;
}): Promise<Product[] | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/category/${category}`);

    if (!res.ok) {
      handleApiError(`fetch product by category ${category}`, res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

import type { Product } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';

const categories = {
  "electronics": 'electronics',
  "jewelery": 'jewelery',
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
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

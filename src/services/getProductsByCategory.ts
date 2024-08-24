import type { Product } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';

const categories = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  men: "men's%20clothing",
  women: "women's%20clothing",
} as const;

type Category = keyof typeof categories;

export const getProductsByCategory = async ({
  category,
}: {
  category: Category;
}): Promise<Product[] | null> => {
  try {
    const categoryValue = categories[category];

    const res = await fetch(
      `${API_BASE_URL}/products/category/${categoryValue}`,
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

import type { Product } from './type';

const API_BASE_URL = process.env.NEXT_PUBLIC_APIBASEURL;

export const getProducts = async (
  params?: string,
): Promise<Product[] | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products${params}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSingleProducts = async (
  id: number,
): Promise<Product | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

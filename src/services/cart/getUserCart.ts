import { API_BASE_URL } from '@/lib/api';
import { Cart } from '@/lib/type';

export const getUserCart = async (userId: number): Promise<Cart | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/carts/user/${userId}`);
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

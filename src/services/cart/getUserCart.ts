import { API_BASE_URL, handleApiError } from '@/lib/api';
import { ResponseCart } from '@/lib/type';

export const getUserCart = async (
  userId: number,
): Promise<ResponseCart | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/carts/user/${userId}`);

    if (!res.ok) {
      handleApiError('fetch user cart', res.statusText);
    }

    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

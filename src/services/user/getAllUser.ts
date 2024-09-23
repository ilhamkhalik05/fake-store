import { API_BASE_URL } from '@/lib/api';
import { User } from '@/lib/type';
import { handleApiError } from '@/lib/utils';

export const getAllUser = async (): Promise<User[] | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);

    if (!res.ok) {
      handleApiError('fetch all user', res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

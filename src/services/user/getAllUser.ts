import { API_BASE_URL } from '@/lib/api';
import { User } from '@/lib/type';

export const getAllUser = async (): Promise<User[] | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

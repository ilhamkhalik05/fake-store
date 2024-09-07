import type { User } from '@/lib/type';
import { getAllUser } from './getAllUser';

export const getUserSession = async (
  username: string,
): Promise<User | undefined> => {
  const users = await getAllUser();
  const userSessionData = users?.find((user) => user.username === username);

  return userSessionData;
};

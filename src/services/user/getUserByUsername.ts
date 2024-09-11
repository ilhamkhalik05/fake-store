import { getAllUser } from './getAllUser';

export const getUserByUsername = async (username: string) => {
  try {
    const users = await getAllUser();
    const user = users?.find((user) => user.username === username);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

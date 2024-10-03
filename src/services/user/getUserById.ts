import { API_BASE_URL } from "@/lib/api";
import { User } from "@/lib/type";
import { handleApiError } from "@/lib/utils";

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/users/${id}`);

    if (!res.ok) {
      handleApiError("get user by id", res.statusText);
    }

    const user = await res.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

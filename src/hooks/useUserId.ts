import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getUserByUsername } from '@/services/user';

export const useUserId = () => {
  const { data: session } = useSession();
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const getUserId = async () => {
      if (session?.user?.name) {
        const user = await getUserByUsername(session.user.name);
        setUserId(user?.id ?? null);
      }
    };

    getUserId();
  }, [session?.user?.name]);

  return userId;
};

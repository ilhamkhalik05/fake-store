import type { TSignInSchema } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getUserToken, setUserToken } from '@/lib/utils';

export const useAuth = () => {
  const userToken = getUserToken();
  const isLogin = userToken ? true : false;

  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    if (userToken && pathname === '/auth') {
      push('/');
    }
  }, [userToken]);

  const signInOnSuccess = (token: string) => {
    setUserToken(token);
    push('/');
  };

  const signInAction = async (userData: TSignInSchema) => {
    await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => signInOnSuccess(data.token))
      .catch((err) => console.log(err));
  };

  return { userToken, isLogin, signInAction };
};

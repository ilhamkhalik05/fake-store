'use client';

import type { TAuthStatus, TSignInSchema, UserSession } from '@/lib/type';
import { API_BASE_URL } from '@/lib/api';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getSession, setSession } from '@/lib/auth';

export const useAuth = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const session: UserSession = getSession();
  const status: TAuthStatus = session ? 'authenticated' : 'unauthenticated';

  useEffect(() => {
    if (session && pathname === '/auth') {
      push('/');
    }
  }, [session]);

  const signInOnSuccess = (userSession: UserSession) => {
    setSession(userSession);
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
      .then((data) =>
        signInOnSuccess({ username: userData.username, token: data.token }),
      )
      .catch((err) => console.log(err));
  };

  return { session, status, signInAction };
};

'use client';

import type { UserSession } from './type';

export const getSession = () => {
  const rawSessionObject = localStorage.getItem('user_session');
  return JSON.parse(rawSessionObject as string);
};

export const setSession = (userSession: UserSession) => {
  localStorage.setItem('user_session', JSON.stringify(userSession));
};

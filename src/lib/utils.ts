import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { UserSession } from './type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSession() {
  const rawSessionObject = localStorage.getItem('user_session');
  return JSON.parse(rawSessionObject as string);
}

export function setSession(userSession: UserSession) {
  localStorage.setItem('user_session', JSON.stringify(userSession));
}

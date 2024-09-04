import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setUserToken(token: string) {
  return localStorage.setItem('user_token', token);
}

export function getUserToken() {
  return localStorage.getItem('user_token');
}

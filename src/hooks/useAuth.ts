import type { TSignInSchema } from '@/lib/type';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prevState) => !prevState);
  }

  async function handleAuth(userInput: TSignInSchema) {
    const res = await signIn('credentials', {
      redirect: false,
      username: userInput.username,
      password: userInput.password,
    });

    return res;
  }

  return { showPassword, togglePassword, handleAuth };
};

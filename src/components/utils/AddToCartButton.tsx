'use client';

import type { User } from '@/lib/type';
import { useEffect, useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import { useAuth } from '@/hooks/useAuth';
import { getUserSession } from '@/services/user';
import Link from 'next/link';

export const AddToCartButton = () => {
  const [userSession, setUserSession] = useState<User>();
  const { session } = useAuth();

  const getUserSessionData = async () => {
    const userSessionData = await getUserSession(session.username);
    setUserSession(userSessionData);
  };

  useEffect(() => {
    getUserSessionData();
  }, []);

  return (
    <Link href={`/cart/user/${userSession?.id}`}>
      <Button variant={'outline'} className="flex items-center gap-2.5">
        <ShoppingCartIcon size={18} />
        Add to Cart
      </Button>
    </Link>
  );
};

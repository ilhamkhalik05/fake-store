'use client';

import { useUserId } from '@/hooks/useUserId';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const NavigateToCartButton = () => {
  const userId = useUserId();
  return (
    <Link href={`/cart/${userId}`}>
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <ShoppingCartIcon size={18} />
      </Button>
    </Link>
  );
};

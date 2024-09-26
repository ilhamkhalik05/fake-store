'use client';

import { useSession } from 'next-auth/react';
import { useCart } from '@/hooks/useCart';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import { showNotification } from '@/lib/notyf';
import Link from 'next/link';

export const NavigateToCartButton = () => {
  const { data: session } = useSession();
  const { data: cartSummary } = useCart(session?.user?.id as number);

  function onOpenShowNotyf() {
    showNotification({
      type: 'error',
      message: 'You must log in to use this feature',
    });
  }

  if (!session) {
    return (
      <Button
        variant={'outline'}
        size={'icon'}
        className="rounded-full"
        onClick={onOpenShowNotyf}
      >
        <ShoppingCartIcon size={18} />
      </Button>
    );
  }

  return (
    <Link href={`/cart/${session.user.id}`} className="relative">
      <Button variant={'outline'} size={'icon'} className="rounded-full">
        <ShoppingCartIcon size={18} />
      </Button>
      {cartSummary?.products && (
        <div className="absolute left-2.5 top-1.5 size-2 rounded-full bg-red-500"></div>
      )}
    </Link>
  );
};

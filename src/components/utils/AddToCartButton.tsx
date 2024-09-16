'use client';

import { useSession } from 'next-auth/react';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const AddToCartButton = () => {
  const { data: session } = useSession();
  return (
    <Link href={`/cart/${session?.user.id}`}>
      <Button variant={'outline'} className="w-full flex items-center gap-2.5">
        <ShoppingCartIcon size={18} />
        Add to Cart
      </Button>
    </Link>
  );
};

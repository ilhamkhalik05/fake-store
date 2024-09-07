'use client';

import Link from 'next/link';
import { Button } from '../@shadcn-ui/button';
import { useAuth } from '@/hooks/useAuth';

export const BannerLinks = () => {
  const { status } = useAuth();
  return (
    <div className="flex items-center gap-3 mt-4">
      <Button className="w-full md:w-auto" variant={'outline'}>
        See our products
      </Button>

      {status === 'unauthenticated' && (
        <Link href={'/auth'}>
          <Button className="w-full md:w-auto" variant={'default'}>
            Join with us
          </Button>
        </Link>
      )}
    </div>
  );
};

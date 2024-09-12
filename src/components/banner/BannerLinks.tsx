'use client';

import { useSession } from 'next-auth/react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const BannerLinks = () => {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    return (
      <div className="flex flex-col gap-3 mt-4 w-full md:flex-row md:w-2/4">
        <Button className="w-full" variant={'outline'}>
          See our products
        </Button>

        <Link href={'/auth'}>
          <Button className="w-full" variant={'default'}>
            Join with us
          </Button>
        </Link>
      </div>
    );
  }

  if (status === 'authenticated') {
    return (
      <Button className="mt-4" variant={'outline'}>
        See our products
      </Button>
    );
  }
};

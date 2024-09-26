import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ProductImage = ({
  className,
  productImage,
}: {
  className?: string;
  productImage: string;
}) => {
  return (
    <Image
      className={cn('select-none m-auto', className)}
      src={productImage}
      alt={'cannot load image'}
      width={1000}
      height={1000}
      priority={true}
    />
  );
};

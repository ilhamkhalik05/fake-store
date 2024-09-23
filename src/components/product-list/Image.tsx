import { cn } from '@/lib/utils';

export const ProductImage = ({
  className,
  productImage,
}: {
  className?: string;
  productImage: string;
}) => {
  return (
    <img
      className={cn('select-none', className)}
      src={productImage}
      alt={'an error occured'}
    />
  );
};

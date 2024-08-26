import { cn } from '@/lib/utils';

export const ProductPrice = ({
  className,
  productPrice,
}: {
  className?: string;
  productPrice: number;
}) => {
  return (
    <h1
      className={cn(
        'text-sm text-foreground font-semibold line-clamp-1',
        className,
      )}
    >
      ${productPrice}
    </h1>
  );
};

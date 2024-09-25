import { cn } from '@/lib/utils';

export const ProductDescription = ({
  className,
  productDescription,
}: {
  className?: string;
  productDescription: string;
}) => {
  return (
    <p
      className={cn(
        'text-sm text-muted-foreground font-medium mb-3',
        className,
      )}
    >
      {productDescription}
    </p>
  );
};

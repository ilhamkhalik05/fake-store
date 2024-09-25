import type { Product } from '@/lib/type';
import { ProductCardSkeleton } from '../skeleton';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('../product-card'), {
  loading: () => <ProductCardSkeleton />,
});

export default async function ProductList({
  products,
}: {
  products: Product[] | null;
}) {
  return (
    <div className={`flex flex-row items-center gap-3 overflow-x-auto w-full`}>
      {products &&
        products?.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
}

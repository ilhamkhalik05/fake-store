import type { Product } from '@/lib/type';

import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { ProductRate } from './Rate';
import { ProductPrice } from './Price';
import { ProductTitle } from './Title';
import { renderCategory } from '../category';
import { ProductImage } from './Image';

export default async function ProductList({
  products,
}: {
  products: Product[] | null;
}) {
  return (
    <div className={`flex flex-row items-center gap-3 overflow-x-auto w-full`}>
      {!!products?.length &&
        products.map((product: Product) => (
          // Card Wrapper
          <Link
            className="cursor-pointer flex flex-col w-[200px] opacity-75 hover:opacity-100 transition-opacity duration-200"
            key={product.id}
            href={'/product/' + product.id}
          >
            {/* Card Image */}
            <Card className="p-3">
              <ProductImage
                className="h-32 object-fit m-auto"
                productImage={product.image}
              />
            </Card>

            {/* Card Items */}
            <CardContent className="p-2">
              {renderCategory(product.category)}

              <ProductTitle productTitle={product.title} />

              <div className="flex justify-between mt-1">
                <ProductPrice productPrice={product.price} />
                <ProductRate productRate={product.rating.rate} />
              </div>
            </CardContent>
          </Link>
        ))}
    </div>
  );
}

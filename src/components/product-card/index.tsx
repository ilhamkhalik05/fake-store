import { Product } from '@/lib/type';
import { Card, CardContent } from '../@shadcn-ui/card';
import { ProductImage } from './Image';
import { ProductTitle } from './Title';
import { ProductPrice } from './Price';
import { ProductRate } from './Rate';
import { renderCategory } from '../category';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  const productCategory = renderCategory(product.category);
  return (
    <Link
      className="cursor-pointer flex flex-col w-52 h-72 opacity-75 hover:opacity-100 active:scale-95 transition-all duration-300"
      href={'/product/' + product.id}
    >
      <Card className="h-1/2 p-3">
        <ProductImage
          className="object-contain size-28"
          productImage={product.image}
        />
      </Card>

      <CardContent className="h-1/2 mt-3 px-1 space-y-1">
        {productCategory}
        <ProductTitle productTitle={product.title} />

        <div className="flex justify-between mt-1">
          <ProductPrice productPrice={product.price} />
          <ProductRate productRate={product.rating.rate} />
        </div>
      </CardContent>
    </Link>
  );
}

import type { Product } from '@/lib/type';

import { StarIcon, TagIcon } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';

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
            href={'/'}
          >
            {/* Card Image */}
            <Card className="p-3">
              <img
                className="h-32 object-fit m-auto"
                src={product.image}
                alt={product.title}
              />
            </Card>

            {/* Card Items */}
            <CardContent className="p-2">
              <Badge
                variant={'outline'}
                className="flex items-center gap-1 mb-1 max-w-fit py-1"
              >
                <TagIcon size={16} />
                <h1 className="text-xs font-medium">{product.category}</h1>
              </Badge>

              <CardTitle className="text-sm text-muted-foreground font-medium line-clamp-2">
                {product.title}
              </CardTitle>

              <div className="flex justify-between mt-1">
                <CardTitle className="text-sm text-foreground font-semibold line-clamp-1">
                  ${product.price}
                </CardTitle>
                <div className="flex items-center gap-1.5">
                  <StarIcon size={15} color="orange" />
                  <CardTitle className="text-xs text-muted-foreground font-light line-clamp-1">
                    {product.rating.rate}/5
                  </CardTitle>
                </div>
              </div>
            </CardContent>
          </Link>
        ))}
    </div>
  );
}

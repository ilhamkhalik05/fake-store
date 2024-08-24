import type { Product } from '@/lib/type';
import { getProducts } from '@/lib/api';
import { Card, CardContent, CardTitle } from '../ui/card';
import { StarIcon, TagIcon } from 'lucide-react';
import { Badge } from '../ui/badge';

export default async function TopProductsList() {
  const products = await getProducts("?limit=5&sort=desc");

  return (
    <div className="grid grid-cols-5 gap-3 w-full">
      {!!products?.length &&
        products.map((product: Product) => (
          // Card Wrapper
          <div className="cursor-pointer flex flex-col opacity-75 hover:opacity-100 transition-opacity duration-200">
            {/* Card Image */}
            <Card key={product.id} className="p-3">
              <img
                className="h-32 object-contain m-auto"
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
          </div>
        ))}
    </div>
  );
}

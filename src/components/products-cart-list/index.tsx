import { Card } from '../@shadcn-ui/card';
import { Checkbox } from '../@shadcn-ui/checkbox';
import { ProductImage } from '../product-list/Image';
import { ProductTitle } from '../product-list/Title';
import { ProductPrice } from '../product-list/Price';
import { Heart } from 'lucide-react';
import { ProductsCartHeader } from './ProductsCartHeader';
import { ProductsInCart } from '@/lib/type';
import { ProductsCartQuantity } from './ProductsCartQuantity';

type TProductsCartList = {
  products: ProductsInCart[];
  plusProductQuantity: (productId: number) => void;
  minusProductQuantity: (productId: number) => void;
  selectProduct: (productId: number, productQuantity: number) => void;
};

export default function ProductsCartList({
  products,
  plusProductQuantity,
  minusProductQuantity,
  selectProduct,
}: TProductsCartList) {
  return (
    <>
      <ProductsCartHeader />

      <div className="flex flex-col gap-4 w-full">
        {products?.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer relative ps-10 pe-6 py-4 rounded-2xl"
          >
            <Checkbox
              className="absolute top-3.5 left-3.5"
              onClick={() => selectProduct(product.id, product.quantity)}
            />

            <div className="flex items-start gap-5 w-full">
              <ProductImage
                productImage={product.image}
                className="size-20 object-contain"
              />
              <div className="flex flex-col justify-between gap-2 size-full">
                <div className="flex flex-col">
                  <ProductTitle
                    className="line-clamp-2 text-black"
                    productTitle={product.title}
                  />
                  <ProductPrice
                    productPrice={product.price}
                    className="text-muted-foreground text-md"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <Heart size={20} />
                  <ProductsCartQuantity
                    productQuantity={product.quantity}
                    plusProductQuantity={() => plusProductQuantity(product.id)}
                    minusProductQuantity={() =>
                      minusProductQuantity(product.id)
                    }
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

import { ProductsInCart } from "./type";

export function onPlusProductQuantity(products: ProductsInCart[], productId: number) {
  return products?.map((product) => {
    return product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity + 1 } : product;
  });
}

export function onMinusProductQuantity(products: ProductsInCart[], productId: number) {
  return products?.map((product) => {
    return product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product;
  });
}

type onSelectProductProps = {
  products: ProductsInCart[];
  productId?: number;
  productQuantity?: number;
  selectAll: boolean;
};

export function onSelectProduct({ products, productId, productQuantity, selectAll }: onSelectProductProps) {
  return products?.map((product) => {
    if (!selectAll) {
      return product.id === productId && product.quantity > 0
        ? ({
            ...product,
            quantity: productQuantity,
            status: "SELECT",
          } as ProductsInCart)
        : product;
    }

    if (selectAll) {
      return {
        ...product,
        status: "SELECT",
      } as ProductsInCart;
    }

    return product;
  });
}

type onUnSelectProductProps = {
  products: ProductsInCart[];
  productId?: number;
  unselectAll: boolean;
};

export function onUnSelectProduct({ products, productId, unselectAll }: onUnSelectProductProps) {
  return products?.map((product) => {
    if (!unselectAll) {
      return product.id === productId && product.quantity > 0
        ? ({
            ...product,
            status: "REST",
          } as ProductsInCart)
        : product;
    }

    if (unselectAll) {
      return {
        ...product,
        status: "REST",
      } as ProductsInCart;
    }

    return product;
  });
}

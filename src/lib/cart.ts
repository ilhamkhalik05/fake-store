import { ProductsInCart } from "./type";

type onSelectProductProps = {
  products: ProductsInCart[];
  productId?: number;
  productQuantity?: number;
  selectAll: boolean;
};

type onUnSelectProductProps = {
  products: ProductsInCart[];
  productId?: number;
  unselectAll: boolean;
};

export function getTotalQuantity(products: ProductsInCart[]) {
  const selectedProducts = products.filter((product) => product.status === "SELECT");
  const totalQuantity = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);
  return totalQuantity;
}

export function onPlusProductQuantity(products: ProductsInCart[], productId: number) {
  return products?.map((product) => {
    // -- Check if product is the same and make sure the quantities are between 0 and 20 --
    return product.id === productId && product.quantity > 0 && product.quantity < 20
      ? ({ ...product, quantity: product.quantity + 1 } as ProductsInCart)
      : product;
  });
}

export function onMinusProductQuantity(products: ProductsInCart[], productId: number) {
  return products?.map((product) => {
    // -- Check if product is the same and make sure the quantity is greater than 1 (can't be 0) --
    return product.id === productId && product.quantity > 1
      ? ({ ...product, quantity: product.quantity - 1 } as ProductsInCart)
      : product;
  });
}

export function onSelectProduct({ products, productId, productQuantity, selectAll }: onSelectProductProps) {
  return products?.map((product) => {
    if (!selectAll) {
      // -- Check if product is the same and make sure the quantities are between 0 and 20 --
      return product.id === productId && product.quantity > 0 && product.quantity < 20
        ? // Select single product by change the quantity and status to SELECT
          ({
            ...product,
            quantity: productQuantity,
            status: "SELECT",
          } as ProductsInCart)
        : product;
    }

    if (selectAll) {
      // Select all products by change the status to SELECT
      return {
        ...product,
        status: "SELECT",
      } as ProductsInCart;
    }

    return product;
  });
}

export function onUnSelectProduct({ products, productId, unselectAll }: onUnSelectProductProps) {
  return products?.map((product) => {
    if (!unselectAll) {
      // -- Check if product is the same and make sure the quantity is greater than 0 --
      return product.id === productId && product.quantity > 0
        ? // Unselect single product by change the status to REST
          ({
            ...product,
            status: "REST",
          } as ProductsInCart)
        : product;
    }

    if (unselectAll) {
      // Unselect all products by change the status to REST
      return {
        ...product,
        status: "REST",
      } as ProductsInCart;
    }

    return product;
  });
}


export const selectProducts = (products) => {
  return {
    type: "SELECT_PRODUCT",
    payload: products,
  };
};

export const CartProducts = (product) => {
  return {
    type: "CART_PRODUCT",
    payload: product,
  };
};

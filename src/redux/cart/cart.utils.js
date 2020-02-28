export const computeCart = (cart) => {
  return cart.products.reduce((acc, item) => {
    acc.push({
      ...item.product,
      id: item._id,
      productId: item.product._id,
      size: item.size,
      purchaseQuantity: item.purchaseQuantity,
      color: item.color,
    });
    return acc;
  }, []);
}
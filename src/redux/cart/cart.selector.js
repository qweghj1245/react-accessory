import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCarts= createSelector(
  [selectCart],
  cart => cart.cart,
);

export const selectComputeCart= createSelector(
  [selectCart],
  cart => cart.reduceCart,
);

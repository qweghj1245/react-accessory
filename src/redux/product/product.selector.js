import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectProducts = createSelector(
  [selectProduct],
  product => product.products,
);

export const selectHomeProducts = createSelector(
  [selectProducts],
  product => product.filter(item => item.classification==='home'),
);
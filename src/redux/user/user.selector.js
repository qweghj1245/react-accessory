import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectLoginUser = createSelector(
  [selectUser],
  user => user.loginUser,
);

export const selectCreateUser = createSelector(
  [selectUser],
  user => user.createUser,
);

export const selectLoginError = createSelector(
  [selectUser],
  user => user.loginError,
);

export const selectCreateError = createSelector(
  [selectUser],
  user => user.createError,
);
import types from "./types";

export const balanceIncrementAction = (summ) => ({
  type: types.BALANCE_INCREMENT,
  payload: { summ },
});

export const balanceDecrementAction = (summ) => ({
  type: types.BALANCE_DECREMENT,
  payload: { summ },
});

export const userInitAction = () => ({
  type: types.BANK_INIT_USER,
});

export const loyaltyProgram = (bonus) => ({
  type: types.USER_LOYALTY_PROGRAM,
  payload: { bonus },
});

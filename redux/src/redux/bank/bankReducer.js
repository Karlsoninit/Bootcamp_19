import types from "./types";

const balanceReducer = (state = 10000, { type, payload }) => {
  switch (type) {
    case types.BALANCE_INCREMENT:
      return state + payload.summ;
    case types.BALANCE_DECREMENT:
      return state - payload.summ;
    case types.BANK_INIT_USER:
      return state + 9;
    default:
      return state;
  }
};

const userReducer = (
  state = {
    name: "MAX",
    uniqueId: "9f87gyghrjf",
    key: "0987654356",
    isInit: true,
    bonus: 0,
  },
  { type, payload }
) => {
  switch (type) {
    case types.BANK_INIT_USER:
      return { ...state, isInit: !state.isInit };
    case types.USER_LOYALTY_PROGRAM:
      return { ...state, bonus: state.bonus + payload.bonus };
    default:
      return state;
  }
};

export { balanceReducer, userReducer };

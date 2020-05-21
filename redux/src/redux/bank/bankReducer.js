import types from "./types";

// const balanceReducerOld = (state = 10000, { type, payload }) => {
//   switch (type) {
//     case types.BALANCE_INCREMENT:
//       return state + payload.summ;
//     case types.BALANCE_DECREMENT:
//       return state - payload.summ;
//     case types.BANK_INIT_USER:
//       return state + 9;
//     default:
//       return state;
//   }
// };

const handlers = {
  [types.BALANCE_INCREMENT]: (state, { payload }) => state + payload.summ,
  [types.BALANCE_DECREMENT]: (state, { payload }) => state - payload.summ,
  [types.BANK_INIT_USER]: (state) => state + 9,
  DEFAULT: (state) => state,
};

const balanceReducer = (state = 10000, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

const initialState = {
  name: "MAX",
  uniqueId: "9f87gyghrjf",
  key: "0987654356",
  isInit: true,
  bonus: 0,
  theme:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8Mzl5qguets%2Fmaxresdefault.jpg&f=1&nofb=1",
};

// const userReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.BANK_INIT_USER:
//       return { ...state, isInit: !state.isInit };
//     case types.USER_LOYALTY_PROGRAM:
//       return { ...state, bonus: state.bonus + payload.bonus };
//     default:
//       return state;
//   }
// };

const handlersUser = {
  [types.BANK_INIT_USER]: (state) => ({ ...state, isInit: !state.isInit }),
  [types.USER_LOYALTY_PROGRAM]: (state, { payload }) => ({
    ...state,
    bonus: state.bonus + payload.bonus,
  }),
  DEFAULT: (state) => state,
};

const userReducer = (state = initialState, action) => {
  const handler = handlersUser[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export { balanceReducer, userReducer };

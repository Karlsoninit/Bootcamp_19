import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { balanceReducer, userReducer } from "./bank/bankReducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());

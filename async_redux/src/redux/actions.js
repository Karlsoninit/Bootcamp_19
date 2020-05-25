import types from "./types";

export const updateState = (value) => ({
  type: types.UPDATE_STATE,
  payload: { value },
});

import types from "./types";

const initialState = {
  wishes: [],
  collection: "wishes",
};

export const wishes = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_STATE:
      return { ...initialState, wishes: payload.value };
    default:
      return state;
  }
};

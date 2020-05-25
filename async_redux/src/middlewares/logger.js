export const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log("typeof action", typeof action);
  console.log(action);
  return typeof action === "function"
    ? action(dispatch, getState)
    : next(action);
};

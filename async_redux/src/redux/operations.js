import axios from "axios";
// import { updateState } from "./actions";
import { updateState } from "./store";

export const relavanceWishes = () => async (dispatch, getState) => {
  const collection = getState().collection;

  const wishes = await axios.get(
    `https://news-9cced.firebaseio.com/${collection}.json`
  );

  const transform = Object.keys(wishes.data).map((w) => ({
    ...wishes.data[w],
    key: w,
  }));

  console.log("transform", transform);

  // dispatch(updateState(transform));
  dispatch(updateState(transform));
};

// export const relavanceWishes = () => ({})

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { BirthdayBoyList } from "./BirthdayBoyList";
import { currentBirthdayBoys } from "../../redux/operations";
console.log(currentBirthdayBoys);

export const BirthdayBoy = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { category } = queryString.parse(history.location.search);

  const { birthday } = useSelector((state) => state.planning);

  useEffect(() => {
    dispatch(currentBirthdayBoys(category));
  }, []);

  return <BirthdayBoyList history={history} data={birthday.allBirthdayBoys} />;
};

// const thunk = ({ dispatch, getState }) => (next) => (action) =>
//   typeof action === "function" ? action(dispatch, getState) : next(action);

// const res = dispatch(currentBirthdayBoys(category));

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

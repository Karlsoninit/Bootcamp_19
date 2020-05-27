import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { firestore } from "../firebase/config";
import { actions } from "../redux/store";

export const BirthdayPage = () => {
  const history = useHistory();
  console.log("history", history);
  const { category } = queryString.parse(history.location.search);
  console.log("parsed", category);

  const dispatch = useDispatch();
  const { birthday } = useSelector((state) => state.planning);
  useEffect(() => {
    currentBirthdayBoys();
  }, []);

  const currentBirthdayBoys = () => {
    firestore.collection(category).onSnapshot((doc) => {
      const birthdayBoys = doc.docs.map((d) => ({ ...d.data(), wishId: d.id }));
      dispatch(actions.getBirthdayBoys({ birthdayBoys }));
    });
  };

  return (
    <div>
      <h2>BirthdayPage</h2>
      <ul>
        {birthday.allBirthdayBoys.map((b) => (
          <li key={b.wishId}>
            <h2>{b.birthdayBoyName}</h2>
            <button
              onClick={() =>
                history.push({
                  pathname: `/birthday/${b.wishId}`,
                  search: "?category=birthday",
                  hash: `#birthdayBoy-${b.birthdayBoyName}`,
                })
              }
            >
              show wish
            </button>
          </li>
        ))}
      </ul>
      <Link to="/birthday/birthdayBoy">birthdayBoy</Link>
    </div>
  );
};

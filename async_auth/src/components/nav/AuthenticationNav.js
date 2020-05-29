import React from "react";
import { useHistory } from "react-router-dom";

export const AuthenticationNav = () => {
  const history = useHistory();
  return (
    <>
      <button
        onClick={() =>
          history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Bithday
      </button>
      <button
        onClick={() =>
          history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Travel
      </button>
      <button
        onClick={() =>
          history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Buy
      </button>
    </>
  );
};

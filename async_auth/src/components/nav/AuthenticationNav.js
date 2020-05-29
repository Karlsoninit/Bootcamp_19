import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/config";
export const AuthenticationNav = () => {
  const signOut = () => {
    auth.signOut();
  };
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
      <button onClick={signOut}>sign out</button>
    </>
  );
};

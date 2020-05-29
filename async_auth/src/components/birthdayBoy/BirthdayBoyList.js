import React from "react";
import { Link } from "react-router-dom";
import { BirthdayBoyCard } from "../../ui/Card";

export const BirthdayBoyList = ({ data, history }) => {
  const handleClick = (birthdayBoy) =>
    history.push({
      pathname: `/birthday/${birthdayBoy.wishId}`,
      search: "?category=birthday",
      hash: `#birthdayBoy-${birthdayBoy.birthdayBoyName}`,
    });

  return (
    <>
      <Link to="/birthday/birthdayBoy">birthdayBoy</Link>

      <ul>
        {data.map((birthdayBoy) => {
          console.log("birthdayBoy", birthdayBoy);
          return (
            <BirthdayBoyCard
              key={birthdayBoy.wishId}
              {...birthdayBoy}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </>
  );
};

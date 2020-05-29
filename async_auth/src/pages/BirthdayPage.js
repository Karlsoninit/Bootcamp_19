import React from "react";
import { BirthdayBoy } from "../components/birthdayBoy/BirthdayBoy";

export const BirthdayPage = (props) => {
  console.log("props BirthdayPage", props);
  return (
    <>
      <BirthdayBoy />
    </>
  );
};

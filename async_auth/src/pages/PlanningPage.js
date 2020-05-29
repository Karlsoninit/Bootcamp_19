import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const PlanningPage = () => {
  const {
    user: { nickName },
  } = useSelector((state) => state.user);
  return <h2>hello :) {nickName}</h2>;
};

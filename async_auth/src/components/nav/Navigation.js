import React from "react";
import { UnAuthenticationNav } from "./UnAuthenticationNav";
import { AuthenticationNav } from "./AuthenticationNav";

export const Navigation = ({ isAuthentication }) => {
  console.log("isAuthentication", isAuthentication);

  let content = <AuthenticationNav />;

  if (!isAuthentication) {
    content = <UnAuthenticationNav />;
  }

  return content;
};

import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import NotAuth from "./NotAuth";

export const PrivateRoute = ({ element: Element }) => {
  const { session } = useContext(authContext);

  if (session) {
    return <Element />;
  } else {
    return <NotAuth />;
  }
};

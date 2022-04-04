import React from "react";
import { StyledP } from "./StyledP";

const P = ({ children, footer }) => {
  return <StyledP footer={footer}>{children}</StyledP>;
};

export default P;

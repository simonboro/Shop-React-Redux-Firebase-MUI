import React from "react";
import { StyledInvisibleButton } from "./StyledInvisibleButton";

const InvisibleButton = ({ children, onClickFn }) => {
  return (
    <StyledInvisibleButton onClick={onClickFn}>
      {children}
    </StyledInvisibleButton>
  );
};

export default InvisibleButton;

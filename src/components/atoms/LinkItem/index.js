import React from "react";
import { StyledLinkItem } from "./StyledLinkItem";

const LinkItem = ({ children, pathConfig }) => {
  return (
    <StyledLinkItem to={pathConfig.pathname} state={pathConfig.state}>
      {children}
    </StyledLinkItem>
  );
};

export default LinkItem;

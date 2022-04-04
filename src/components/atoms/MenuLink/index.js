import React from "react";
import { StyledLink } from "./StyledLink";

const MenuLink = ({ children, path, footer }) => {
  return (
    <StyledLink to={path} footer={footer ? 1 : 0}>
      {children}
    </StyledLink>
  );
};

export default MenuLink;

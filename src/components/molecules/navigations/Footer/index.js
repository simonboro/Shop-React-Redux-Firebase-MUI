import React from "react";
import { navbarItems } from "../../../../utils/navbarItems";
import MenuLink from "../../../atoms/MenuLink";
import P from "../../../atoms/P";
import { FooterSectionWrapper, StyledFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSectionWrapper>
        <h1>Shop</h1>
        {navbarItems.map(({ name, path }) => (
          <MenuLink key={name} path={path} footer>
            {name}
          </MenuLink>
        ))}
      </FooterSectionWrapper>
      <FooterSectionWrapper>
        <h1>Contact</h1>
        <P footer>xyzxyz@gmail.com</P>
        <P footer>+48 692 299 390</P>
      </FooterSectionWrapper>
    </StyledFooter>
  );
};

export default Footer;

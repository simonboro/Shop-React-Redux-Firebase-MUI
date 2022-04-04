import React from "react";
import MenuLink from "../../../atoms/MenuLink";
import { navbarItems } from "../../../../utils/navbarItems";
import {
  NavBarWrapper,
  StyledIconsWrapper,
  StyledMenuList,
  StyledNavBar,
} from "./StyledNavBar";
import Logo from "../../../atoms/Logo";
import { useSelector } from "react-redux";
import Cart from "../../Cart";
import LoginButton from "../../../atoms/LoginButton";
import { auth } from "../../../../firebase/config";
import { Button, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../utils/routes";

const Navbar = () => {
  const state = useSelector((state) => state);
  const { productsReducer, usersReducer } = state;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = routes.home;
    navigate(path);
  };

  return (
    <StyledNavBar>
      <NavBarWrapper>
        <Logo />
        <StyledMenuList>
          {navbarItems.map(({ name, path }) => (
            <MenuLink key={name} path={path}>
              {name}
            </MenuLink>
          ))}
        </StyledMenuList>
        <StyledIconsWrapper>
          <Cart amountOfProd={productsReducer.productsCart.length} />
          <LoginButton />
          {/* when log in change to LogOut */}
          {usersReducer.currentUser && (
            <Tooltip title="Logout">
              <Button
                onClick={() => {
                  auth.signOut();
                  routeChange();
                }}
                endIcon={<LogoutIcon />}
              />
            </Tooltip>
          )}
        </StyledIconsWrapper>
      </NavBarWrapper>
    </StyledNavBar>
  );
};

export default Navbar;

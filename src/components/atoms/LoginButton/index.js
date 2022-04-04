import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuLink from "../MenuLink";
import { routes } from "../../../utils/routes";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";

const LoginButton = () => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  return (
    <MenuLink path={currentUser ? routes.userProfile : routes.logIn}>
      <Tooltip title="User Profile">
        <AccountCircleIcon color="info" sx={{ fontSize: 30 }} />
      </Tooltip>
    </MenuLink>
  );
};

export default LoginButton;

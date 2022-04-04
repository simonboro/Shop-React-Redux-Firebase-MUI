import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/molecules/LoginForm";
import { routes } from "../../utils/routes";

const Login = () => {
  const [isNavigate, setIsNavigate] = useState(false);

  const { currentUser } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (currentUser) {
      setIsNavigate(true);
    }
  }, []);

  return (
    <>
      <LoginForm />
      {isNavigate && <Navigate to={routes.userProfile} />}
    </>
  );
};

export default Login;

import React, { useState } from "react";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { auth } from "../../../firebase/config";
import {
  StyledLink,
  StyledLoginForm,
  WrapperLoginForm,
} from "./StyledLoginForm";
import { routes } from "../../../utils/routes";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../redux/actions/usersActions";
import { Navigate } from "react-router-dom";

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Write email").email("Invalid email"),
  password: Yup.string()
    .required("Write password")
    .min(8, "password not correct"),
});

const LoginForm = () => {
  const [isNavigate, setIsNavigate] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginFormValidationSchema}
        onSubmit={({ email, password }, { resetForm }) => {
          auth
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              usersCollection
                .doc(res.user.uid)
                .get()
                .then((res) => {
                  dispatch(setCurrentUser(res.data()));
                  setIsNavigate(true);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <WrapperLoginForm>
              <StyledLoginForm>
                <h1>Sign-In</h1>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  id="outlined"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
                <TextField
                  fullWidth
                  name="password"
                  type="password"
                  id="outlined"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" />
                <Button fullWidth type="submit" variant="contained">
                  Continue
                </Button>
                <StyledLink to={routes.register}>Create an account</StyledLink>
              </StyledLoginForm>
            </WrapperLoginForm>
          </Form>
        )}
      </Formik>
      {isNavigate && <Navigate to={routes.products} />}
    </>
  );
};

export default LoginForm;

import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { auth } from "../../../firebase/config";
import { WrapperRegisterForm, StyledRegisterForm } from "./StyledRegisterForm";

const registerFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Write email").email("Invalid email"),
  password: Yup.string()
    .required("Write password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,

      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  repeatPassword: Yup.string()
    .required("Repeat your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Passwords dosent match"),
    }),
  name: Yup.string().required("Write name").min(2, "Name is to short"),
  surname: Yup.string().required("Write Surname").min(2, "Surname is to short"),
});

const RegisterForm = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      surname: "",
    }}
    validationSchema={registerFormValidationSchema}
    onSubmit={(values, { resetForm }) => {
      console.log("Register new user");
      console.log(
        values.email,
        values.password,
        values.repeatPassword,
        values.name,
        values.surname
      );
      const { email, password, repeatPassword, name, surname } = values;

      const user = {
        email,
        password,
        repeatPassword,
        name,
        surname,
      };
      auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          usersCollection.doc(res.user.uid).set({
            email,
            name,
            surname,
          });
        })
        .catch((err) => console.log(err));

      resetForm();
    }}
  >
    {({ values, handleChange }) => (
      <Form>
        <WrapperRegisterForm>
          <StyledRegisterForm>
            <h1>Register</h1>
            <TextField
              fullWidth
              name="email"
              type="text"
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
            <TextField
              fullWidth
              name="repeatPassword"
              type="password"
              id="outlined"
              label="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
            />
            <ErrorMessage name="repeatPassword" />
            <TextField
              fullWidth
              name="name"
              type="text"
              id="outlined"
              label="Name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" />
            <TextField
              fullWidth
              name="surname"
              type="text"
              id="outlined"
              label="Surname"
              value={values.surname}
              onChange={handleChange}
            />
            <ErrorMessage name="surname" />
            <Button fullWidth type="submit" variant="contained">
              Create Account
            </Button>
          </StyledRegisterForm>
        </WrapperRegisterForm>
      </Form>
    )}
  </Formik>
);

export default RegisterForm;

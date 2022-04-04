import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import { StyledCheckoutUserInfoForm } from "./StyledCheckoutUserInfoForm";

const checkoutUserInfoFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Write email").email("Invalid email"),
  name: Yup.string().required("Write name").min(2, "Name is to short"),
  surname: Yup.string().required("Write surname").min(2, "Surname is to short"),
  adress: Yup.string().required("Write adress"),
  city: Yup.string().required("Write city"),
  postalCode: Yup.string().required("Write Postal Code"),
  phone: Yup.number().required("Write phone").min(9, "Number is to short"),
});

const CheckoutUserOrderForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        surname: "",
        adress: "",
        city: "",
        postalCode: "",
        phone: "",
      }}
      validationSchema={checkoutUserInfoFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Checkout Ready");

        const { email, name, surname, adress, city, postalCode, phone } =
          values;

        const order = {
          email,
          name,
          surname,
          adress,
          city,
          postalCode,
          phone,
        };

        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <StyledCheckoutUserInfoForm>
            <h1>Client Info</h1>
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
            <TextField
              fullWidth
              name="adress"
              type="text"
              id="outlined"
              label="Adress"
              value={values.adress}
              onChange={handleChange}
            />
            <ErrorMessage name="adress" />
            <TextField
              fullWidth
              name="city"
              type="text"
              id="outlined"
              label="City"
              value={values.city}
              onChange={handleChange}
            />
            <ErrorMessage name="city" />
            <TextField
              fullWidth
              name="postalCode"
              type="text"
              id="outlined"
              label="PostalCode"
              value={values.postalCode}
              onChange={handleChange}
            />
            <ErrorMessage name="postalCode" />
            <TextField
              fullWidth
              name="phone"
              type="text"
              id="outlined"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
            />

            <ErrorMessage name="phone" />
            <Button fullWidth type="submit" variant="contained">
              Checkout
            </Button>
          </StyledCheckoutUserInfoForm>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutUserOrderForm;

//email, adress, name, surname, city, postal code, phone number

import { Button, TextField } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { StyledContactForm, WrapperContactForm } from "./StyledContactForm";
import SendIcon from "@mui/icons-material/Send";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Write name").min(2, "name is to short"),
  email: Yup.string().required("Write email").email("Invalid email"),
  message: Yup.string("Write message").min(10, "message is to short"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={contactFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Send mail");

        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <WrapperContactForm>
            <StyledContactForm>
              <h1>Contact Us</h1>
              <TextField
                fullWidth
                name="name"
                id="outlined"
                label="Name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" />
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
                name="message"
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={6}
                value={values.message}
                onChange={handleChange}
              />
              <ErrorMessage name="message" />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </StyledContactForm>
          </WrapperContactForm>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

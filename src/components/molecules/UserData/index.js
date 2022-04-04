import React, { useState } from "react";
import { TextField } from "@mui/material";
import { StyledUserData, WrapperButtons } from "./StyledCheckoutUserData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { setCurrentUser } from "../../../redux/actions/usersActions";

const UserData = ({ header, isEdit, toggleIsEdit, showButtons }) => {
  const { currentUser } = useSelector(({ usersReducer }) => usersReducer);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    name: "",
    surname: "",
    adress: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserEdit = () => {
    usersCollection
      .doc(currentUser?.userId)
      .set({
        ...currentUser,
        ...values,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    dispatch(setCurrentUser({ ...currentUser, ...values }));
    toggleIsEdit();
  };

  const cancelUserEdit = () => {
    setValues({
      email: currentUser?.email,
      name: currentUser?.name,
      surname: currentUser?.surname,
      adress: currentUser?.adress,
      city: currentUser?.city,
      postalCode: currentUser?.postalCode,
      phone: currentUser?.phone,
    });

    toggleIsEdit();
  };

  useEffect(() => {
    setValues({
      email: currentUser?.email,
      name: currentUser?.name,
      surname: currentUser?.surname,
      adress: currentUser?.adress,
      city: currentUser?.city,
      postalCode: currentUser?.postalCode,
      phone: currentUser?.phone,
    });
  }, [currentUser]);

  return (
    <>
      <StyledUserData>
        <h1>{header}</h1>
        <TextField
          fullWidth
          name="email"
          type="email"
          id="outlined"
          label="Email"
          disabled={!isEdit}
          onChange={handleChange}
          value={values.email}
        />
        <TextField
          fullWidth
          name="name"
          type="text"
          id="outlined"
          label="Name"
          value={values.name}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <TextField
          fullWidth
          name="surname"
          type="text"
          id="outlined"
          label="Surname"
          value={values.surname}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <TextField
          fullWidth
          name="adress"
          type="text"
          id="outlined"
          label="Adress"
          value={values.adress}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <TextField
          fullWidth
          name="city"
          type="text"
          id="outlined"
          label="City"
          value={values.city}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <TextField
          fullWidth
          name="postalCode"
          type="text"
          id="outlined"
          label="PostalCode"
          value={values.postalCode}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <TextField
          fullWidth
          name="phone"
          type="text"
          id="outlined"
          label="Phone"
          value={values.phone}
          onChange={handleChange}
          disabled={!isEdit}
        />
      </StyledUserData>

      {showButtons && (
        <WrapperButtons center={isEdit ? false : true}>
          <Button
            variant="contained"
            endIcon={isEdit ? <SaveIcon /> : <EditIcon />}
            color="primary"
            onClick={isEdit ? saveUserEdit : toggleIsEdit}
          >
            {isEdit ? "Save Data" : "Edit"}
          </Button>

          {isEdit ? (
            <Button
              variant="contained"
              endIcon={<CloseIcon />}
              color="error"
              onClick={cancelUserEdit}
            >
              Cancel
            </Button>
          ) : null}
        </WrapperButtons>
      )}
    </>
  );
};

export default UserData;

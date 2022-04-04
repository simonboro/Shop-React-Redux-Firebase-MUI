import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { StyledPaymentMethod } from "./StyledPaymentMethod";

const PaymentMethod = () => {
  return (
    <StyledPaymentMethod>
      <h2>Payment Method</h2>
      <RadioGroup defaultValue="payu">
        <FormControlLabel value="payu" control={<Radio />} label="Pay U" />
        <FormControlLabel value="blik" control={<Radio />} label="Blik" />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel value="visa" control={<Radio />} label="Visa" />
      </RadioGroup>
    </StyledPaymentMethod>
  );
};

export default PaymentMethod;

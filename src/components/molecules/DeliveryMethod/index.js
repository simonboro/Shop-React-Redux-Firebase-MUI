import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { StyledDeliveryMethod } from "./StyledDeliveryMethod";

const DeliveryMethod = () => {
  return (
    <StyledDeliveryMethod>
      <h2>Delivery Method</h2>
      <RadioGroup defaultValue="dhl">
        <FormControlLabel value="dhl" control={<Radio />} label="DHL" />
        <FormControlLabel value="dps" control={<Radio />} label="DPD" />
        <FormControlLabel value="ups" control={<Radio />} label="UPS" />
      </RadioGroup>
    </StyledDeliveryMethod>
  );
};

export default DeliveryMethod;

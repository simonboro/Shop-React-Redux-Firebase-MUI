import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePriceRangeProductInput } from "../../../redux/actions/productsActions";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .test {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      display: none;
    }
  }
`;

const PriceRange = () => {
  const { maxPrice } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  return (
    <FormControl fullWidth>
      <InputLabel>Max Price</InputLabel>
      <StyledWrapper>
        <OutlinedInput
          value={maxPrice}
          // min={0} //how to prevent negative numbers??
          type="number"
          onChange={(e) =>
            dispatch(handlePriceRangeProductInput(parseInt(e.target.value)))
          }
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Max Price"
          className="test"
        />
      </StyledWrapper>
    </FormControl>
  );
};

export default PriceRange;

import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchProductInput } from "../../../redux/actions/productsActions";

const SearchInput = () => {
  const { products, searchedPhrase } = useSelector(
    ({ productsReducer }) => productsReducer
  );

  const dispatch = useDispatch();

  let searchHints = products.map((prod) => {
    return {
      label: prod.name,
    };
  });

  return (
    <Autocomplete
      disablePortal
      options={searchHints}
      clearOnBlur={false}
      fullWidth
      inputValue={searchedPhrase}
      onInputChange={(e, value) => dispatch(handleSearchProductInput(value))} //"e" beceuse MUI require this instead it deasn't pass argument
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search product"
          value={searchedPhrase}
          onChange={(e) => dispatch(handleSearchProductInput(e.target.value))}
        />
      )}
    />
  );
};

export default SearchInput;

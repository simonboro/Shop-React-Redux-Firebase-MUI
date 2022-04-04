import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { handleCategoryProductChange } from "../../../redux/actions/productsActions";

const SelectCategories = () => {
  const { initialProducts, selectedProductCategory } = useSelector(
    ({ productsReducer }) => productsReducer
  );

  const dispatch = useDispatch();

  const productsCategories = [
    "All",
    ...new Set(initialProducts.map(({ category }) => category)),
  ];

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="categories">Categories</InputLabel>
        <Select
          labelId="categories"
          id="categories"
          value={selectedProductCategory}
          label="Categories"
          onChange={(e) =>
            dispatch(handleCategoryProductChange(e.target.value))
          }
        >
          {productsCategories.map((category, index) => {
            return (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCategories;

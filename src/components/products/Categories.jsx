import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import apiconfig from "../../services/apiconfig";
import { getCategoriesApi } from "../../services/endpoint";

function Categories({ handleCatChange }) {
  const [categories, setCategories] = useState([
    "ALL",
    "APPAREL",
    "ELECTRONICS",
    "FOOTWEAR",
    "PERSONAL CARE",
  ]);

  const [alignment, setAlignment] = useState('ALL');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (categories.length === 0) {
          const data = await apiconfig({ endpoint: getCategoriesApi});
          setCategories(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = ({target})=>{
    const {value} = target;
    handleCatChange(value);
  }

  return (
  <ToggleButtonGroup
    color="primary"
    value={alignment}
    exclusive
    onChange={handleAlignment}
    aria-label="Platform"
  >
    {categories.map((category) => {
      return <ToggleButton onClick={handleChange} key={category} value={category}>{category}</ToggleButton>;
    })}
  </ToggleButtonGroup>);
}

export default Categories;

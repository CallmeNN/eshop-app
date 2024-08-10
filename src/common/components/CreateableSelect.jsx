import React from "react";

import CreatableSelect from "react-select/creatable";

export default ({onChange}) => {
  const colourOptions = [
    { value: "Apparel", label: "Apparel", color: "#00B8D9", isFixed: true },
    { value: "Electronics", label: "Electronics"},
    { value: "Personal Care", label: "Personal Care", color: "#5243AA" },
    
  ];
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999, // Set a high z-index value
    }),
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption?.value)
    onChange(selectedOption?.value)
  }

  return (
    <CreatableSelect
      isClearable
      defaultValue={[colourOptions[0]]}
      options={colourOptions}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

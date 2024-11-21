import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMui({
  menuItemsObj,
  handleSelectChange,
  label = "",
}) {
  const [value, setValue] = React.useState("");

  const menuItemsValue = Object.keys(menuItemsObj);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleSelectChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <p>{label}</p>
        <Select
          value={value}
          placeholder="select..."
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select...</em>;
            }

            return menuItemsObj[selected];
          }}
        >
          {Array.isArray(menuItemsValue)
            ? menuItemsValue.map((value) => {
                return <MenuItem key={value} value={value}>{menuItemsObj[value]}</MenuItem>;
              })
            : null}
        </Select>
      </FormControl>
    </div>
  );
}

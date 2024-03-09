import { FormControl, MenuItem, Select } from "@mui/material";
import {
  amber,
  green,
  lightBlue,
  lightGreen,
  lime,
  orange,
} from "@mui/material/colors";

const SimpleSelect = ({
  options,
  selectedOption,
  onChange,
  disabled,
  defaultValue,
}) => {
  return (
    <FormControl size="small" fullWidth>
      <Select
        disabled={disabled}
        labelId="simple-select"
        id="simple-select"
        value={selectedOption || defaultValue}
        onChange={onChange}
        sx={{
          minWidth: "140px",
          width: 1,
          "& .MuiSelect-select": {
            backgroundColor: selectedOption ? lime["100"] : "transparent",
          },
        }}
      >
        {options?.map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;

import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTimePicker = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
        textDecoration: "none",
      }}
    >
      <TextField
        label=""
        defaultValue="04:20"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: null,
        }}
        style={{ textDecoration: "none" }}
      />
    </div>
  );
};

export default CustomTimePicker;

import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
// @ts-ignore
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99",
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  // Why <<<component="form">>> ?
  return (
    <
// @ts-ignore
    Box autoComplete="off" sx={{ width: "380px" }} component="form">
      <
// @ts-ignore
      TextField
        onChange={(eo) => {
          settitle(eo.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          // @ts-ignore
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <
// @ts-ignore
      TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth={true}
        label=" Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          // @ts-ignore
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <
// @ts-ignore
      ColorButton
        // @ts-ignore
        onClick={(params) => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/");
          });
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <
// @ts-ignore
        ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;

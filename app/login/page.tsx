"use client";
import ButtonComponent from "@/components/Button";
import TextFieldComponent from "@/components/Input";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

export default function Login() {
  const handleLogin = () => {
    console.log("hello");
  };
  const handleSignUp = () => {
    console.log("hello");
  };
  return (
    <Stack
      sx={{ minWidth: 200, maxWidth: 700, margin: "120px auto" }}
      direction="column"
      spacing={8}
      justifyContent="center"
      alignContent="center"
    >
      <TextFieldComponent label="UserName" />
      <TextFieldComponent label="Password" type="password" />
      <ButtonComponent
        type="submit"
        color="primary"
        text="Login"
        variant="contained"
        onClick={handleLogin}
      />
      <Typography>
        Don't have any accout? So Click
        <ButtonComponent
          text="SignUp"
          variant="contained"
          onClick={handleSignUp}
        //  sx={{margin-left="10px"}}
        />
      </Typography>
    </Stack>
  );
}

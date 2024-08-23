"use client";
import ButtonComponent from "@/components/Button";
import TextFieldComponent from "@/components/Input";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { registerUser } from "../api/actions/UserActions";
export default function Login() {
  const [error, setError] = useState("");
  const ref = useRef(null);
  const router = useRouter();
  const handleRegister = (formData: FormData) => {
    const res = await registerUser({});
    router.push("/login");
  };
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <Stack
      sx={{ minWidth: 200, maxWidth: 700, margin: "120px auto" }}
      direction="column"
      spacing={4}
      justifyContent="center"
      alignContent="center"
    >
      <form ref={ref}>
        <TextFieldComponent name="name" label="Name" />
        <TextFieldComponent name="family" label="Family" />
        <TextFieldComponent name="phoneNumber" label="PhoneNumber" />
        <TextFieldComponent name="userName" label="UserName" />
        <TextFieldComponent name="email" label="Email" />
        <TextFieldComponent name="password" label="Password" type="password" />
        <ButtonComponent
          type="submit"
          color="primary"
          text="Register"
          variant="contained"
          onClick={handleRegister}
        />
      </form>
      <Typography>
        Already have accout? So Click
        <ButtonComponent
          text="Login"
          variant="contained"
          onClick={handleLogin}
          //  sx={{margin-left="10px"}}
        />
      </Typography>
    </Stack>
  );
}

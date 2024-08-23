"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import ButtonComponent from "@/components/Button";
import TextFieldComponent from "@/components/Input";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const resEmail = await signIn("CredentialsByEmail",{
      email:formData.get("userName"),
      password:formData.get("password"),
      redirect:false
    });
    const resUserName = await signIn("CredentialsByUserName",{
      userName:formData.get("userName"),
      password:formData.get("password"),
      redirect:false
    });
    console.log(resEmail);
    console.log(resUserName);
    
    if(resUserName?.error){
      setError(resUserName.error as string)
    };
    if(resEmail?.error){
      setError(resEmail.error as string)
    }
    if(resEmail?.ok || resUserName?.ok){
      router.push("/");
    }
  };
  const handleSignUp = () => {
    router.push("/signup");
  };
  return (
    <Stack
      sx={{ minWidth: 200, maxWidth: 700, margin: "120px auto" }}
      direction="column"
      spacing={8}
      justifyContent="center"
      alignContent="center"
    >
     <form onSubmit={handleLogin}>
     {error && <Typography className="text-red mb-3">No User Found</Typography>}
     <TextFieldComponent name="userName" label="UserName Or Email" />
      <TextFieldComponent name="password" label="Password" type="password" />
      <ButtonComponent
        type="submit"
        color="primary"
        text="Login"
        variant="contained"
        // onClick={handleLogin}
      />
     </form>
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

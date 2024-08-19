import { Box } from "@mui/material";
import ButtonComponent from "@/components/Button";
import TextFieldComponent from "@/components/Input";
const Login = () => {
  return (
    <Box>
      <TextFieldComponent
        sx={{ margin: "-12px" }}
        color="secondary"
        label="UserName"
      />
      <TextFieldComponent
        sx={{ margin: "-120px" }}
        color="secondary"
        label="Password"
        type="password"
      />
      <ButtonComponent color="primary" text="llll" variant="contained" />
    </Box>
  );
};
export default Login;

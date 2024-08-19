import { TextField } from "@mui/material";
interface CustomTextFieldProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: React.Fc<CustomTextFieldProps> = ({
  label,
  onChange,
  ...props
}) => {
  return <TextField label={label} onChange={onChange} {...props} />;
};
export default TextFieldComponent;

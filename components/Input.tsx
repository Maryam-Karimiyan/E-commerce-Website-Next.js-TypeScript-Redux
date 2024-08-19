import { TextField } from "@mui/material";
interface CustomTextFieldProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
props?:any
}

const TextFieldComponent: React.FC<CustomTextFieldProps> = ({
  label,
  onChange,
  ...props
}) => {
  return <TextField type="text" label={label} onChange={onChange} {...props} />;
};
export default TextFieldComponent;

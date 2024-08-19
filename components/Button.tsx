import { Button, ButtonProps } from "@mui/material";
interface CustomButtonProps extends ButtonProps {
  text?: string;
  onClick?: () => void;
}
const ButtonComponent:React.FC<CustomButtonProps> = ({ text, onClick, ...props }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {text}
    </Button>
  );
};
export default ButtonComponent;

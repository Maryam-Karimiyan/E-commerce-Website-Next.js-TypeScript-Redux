import { Button, ButtonProps } from "@mui/material";
interface CustomButtonProps {
  text?: string;
  onClick?: () => void;
}
const ButtonComponent: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <Button onClick={onClick} {...props}>
      {text}
    </Button>
  );
};
export default ButtonComponent;

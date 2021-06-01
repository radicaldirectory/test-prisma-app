import { ReactNode } from "react";
import { styled } from "../../stitches.config";

export interface ButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => any;
  disabled?: boolean;
  value?: string;
  type?: "button" | "reset" | "submit";
}

const StyledButton = styled("button", {
  cursor: "pointer",
  background: "#ececec",
  border: "1px solid black",
  borderRadius: "0.125rem",
  padding: "0.25rem 0.5rem",

  "+ button": {
    marginLeft: "1rem"
  }
});

const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props}>{props.children ?? props.value}</StyledButton>
);

export default Button;

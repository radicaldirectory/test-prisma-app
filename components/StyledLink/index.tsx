import { ReactNode } from "react";
import { styled } from "../../stitches.config";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => any;
  disabled?: boolean;
  value?: string;
}

const Link = styled("a", {
  color: "$blue800"
});

export const StyledLink: React.FC<LinkProps> = (props) => (
  <Link {...props}>{props.children ?? props.value}</Link>
);

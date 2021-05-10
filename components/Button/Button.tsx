import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => any;
}

const Button: React.FC<Props> = (props) => (
  <Link href={props.href ?? "/"}>
    <button {...props}>{props.children}</button>
  </Link>
);

export default Button;

import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export interface ButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => any;
  disabled?: boolean;
  value?: string;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProps> = (props) => (
  <Link href={props.href ?? "/"}>
    <button {...props} className={styles.button}>
      {props.children ?? props.value}
    </button>
  </Link>
);

export default Button;

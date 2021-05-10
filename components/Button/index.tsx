import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  children?: ReactNode;
  href?: string;
  onClick?: () => any;
  disabled?: boolean;
  value?: string;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = (
  props
) => (
  <Link href={props.href ?? "/"}>
    <button {...props} className={styles.button}>
      {props.children ?? props.value}
    </button>
  </Link>
);

export default Button;

import { ReactNode } from "react";
import styles from "./Page.module.css";

type Props = {
  children: ReactNode;
};

const Page: React.FC<Props> = (props) => (
  <div className={styles.page}>{props.children}</div>
);

export default Page;

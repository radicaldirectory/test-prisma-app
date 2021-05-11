import { ReactNode } from "react";
import styles from "./Page.module.css";

export type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = (props) => (
  <div className={styles.page}>{props.children}</div>
);

export default Page;

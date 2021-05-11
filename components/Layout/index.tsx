import { ReactNode } from "react";
import Header from "../Header";
import styles from "./Layout.module.css";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => (
  <div>
    <Header />
    <div className={styles.layout}>{props.children}</div>
  </div>
);

export default Layout;

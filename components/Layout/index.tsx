import { ReactNode } from "react";
import Header from "@components/Header";
import styles from "./Layout.module.css";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => (
  <>
    <Header />
    <div className={styles.layout}>{props.children}</div>
  </>
);

export default Layout;

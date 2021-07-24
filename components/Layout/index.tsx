import { ReactNode } from "react";
import Header from "@components/Header";
import { styled } from "../../stitches.config";

export type LayoutProps = {
  children: ReactNode;
};

const StyledBody = styled("div", {
  padding: "0"
});

const Layout: React.FC<LayoutProps> = (props) => (
  <>
    <Header />
    <StyledBody>{props.children}</StyledBody>
  </>
);

export default Layout;

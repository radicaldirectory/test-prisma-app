import { ReactNode } from "react";
import { styled } from "stitches.config";

export type PageProps = {
  children: ReactNode;
};

const StyledPage = styled("div", {
  display: "flex",
  // justifyContent: "center",
  flexDirection: "column"
});

const Page: React.FC<PageProps> = (props) => (
  <StyledPage>{props.children}</StyledPage>
);

export default Page;

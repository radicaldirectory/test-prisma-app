import { ReactNode } from "react";

export type TitleProps = {
  children: ReactNode;
};

const Title: React.FC<TitleProps> = (props) => <h1>{props.children}</h1>;

export default Title;

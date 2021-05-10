import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Title: React.FC<Props> = (props) => <h1>{props.children}</h1>;

export default Title;

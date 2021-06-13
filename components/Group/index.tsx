import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { styled } from "../../stitches.config";

export type GroupProps = {
  id: number;
  name: string;
  //   content: string;
};

const StyledGroup = styled("div", {
  color: "inherit",
  padding: "2rem",
  background: "white",
  transition: "box-shadow 0.1s ease-in",

  "&hover": {
    boxShadow: "1px 1px 3px #aaa"
  },
  "+ div": {
    marginTop: "2rem"
  }
});

const Group: React.FC<{ group: GroupProps }> = ({ group }) => {
  return (
    <StyledGroup>
      {/* onClick={() => Router.push("/post/[id]", `/post/${post.id}`)} */}
      <h2>{group.name}</h2>
      {/* <ReactMarkdown source={post.content} /> */}
    </StyledGroup>
  );
};

export default Group;

import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { styled } from "../../stitches.config";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const StyledPost = styled("div", {
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

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <StyledPost onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown source={post.content} />
    </StyledPost>
  );
};

export default Post;

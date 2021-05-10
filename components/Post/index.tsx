import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

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

const Post: React.FC<{ post: PostProps; className?: string }> = ({
  post,
  className
}) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      className={`post ${className}`}
      onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}
    >
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown source={post.content} />
    </div>
  );
};

export default Post;

import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "@components/Layout/Layout";
import Router from "next/router";
import { PostProps } from "@components/Post/Post";
import Title from "@components/Title/Title";
import Button from "@components/Button/Button";
import { useSession } from "next-auth/client";
import prisma from "@lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1
    },
    include: {
      author: {
        select: { name: true, email: true }
      }
    }
  });
  return {
    props: post
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT"
  });
  await Router.push("/");
}

async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE"
  });
  Router.push("/");
}

const Post: React.FC<PostProps> = (props) => {
  const [session, loading] = useSession();
  if (loading) {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <Title>{title}</Title>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown source={props.content} />
        {!props.published && userHasValidSession && postBelongsToUser && (
          <Button onClick={() => publishPost(props.id)}>Publish</Button>
        )}
        {!props.published && userHasValidSession && postBelongsToUser && (
          <Button onClick={() => publishPost(props.id)}>Publish</Button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <Button onClick={() => deletePost(props.id)}>Delete</Button>
        )}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;

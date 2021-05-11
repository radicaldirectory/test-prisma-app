import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import Post, { PostProps } from "@components/Post";
import Page from "@components/Page";
import Title from "@components/Title";
import { useSession, getSession } from "next-auth/client";
import prisma from "@lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false
    },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return {
    props: { drafts }
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  const [session] = useSession();

  if (!session) {
    return (
      <Layout>
        <Title>My Drafts</Title>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Page>
        <Title>My Drafts</Title>
        <main>
          {props.drafts.map((post) => (
            <Post post={post} key={post.id} className="post" />
          ))}
        </main>
      </Page>
    </Layout>
  );
};

export default Drafts;

import React from "react";
import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import Post, { PostProps } from "@components/Post";
import Title from "@components/Title";
import prisma from "@lib/prisma";
import Page from "@components/Page";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Page>
        <Title>Public Feed</Title>

        <main>
          {props.feed.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </main>
      </Page>
    </Layout>
  );
};

export default Blog;

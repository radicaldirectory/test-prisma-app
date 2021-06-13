import React from "react";
import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import Group, { GroupProps } from "@components/Group";
import Title from "@components/Title";
import prisma from "@lib/prisma";
import Page from "@components/Page";

export const getStaticProps: GetStaticProps = async () => {
  const groups = await prisma.group.findMany({
    include: {
      document: {
        select: { content: true }
      }
    }
  });
  return { props: { groups } };
};

type Props = {
  groups: GroupProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Page>
        <Title>Groups</Title>

        <main>
          {props.groups.map((group) => (
            // <Post post={post} key={post.id} />
            <p>{group.name}</p>
          ))}
        </main>
      </Page>
    </Layout>
  );
};

export default Home;

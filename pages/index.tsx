import React from "react";
import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import Group, { GroupProps } from "@components/Group";
import prisma from "@lib/prisma";
import Page from "@components/Page";
import { StyledH1, StyledParagraph } from "@components/Text";

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
        <StyledH1>Groups</StyledH1>

        <main>
          {props.groups.map((group) => (
            // <Post post={post} key={post.id} />
            <StyledParagraph>{group.name}</StyledParagraph>
          ))}
        </main>
      </Page>
    </Layout>
  );
};

export default Home;

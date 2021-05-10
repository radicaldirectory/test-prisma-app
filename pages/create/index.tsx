import React, { useState } from "react";
import Layout from "@components/Layout";
import Title from "@components/Title/Title";
import TextArea from "@components/TextArea";
import TextInput from "@components/TextInput";
import Button from "@components/Button";
import Router from "next/router";
import styles from "./create.module.css";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <form onSubmit={submitData}>
        <Title>New Draft</Title>
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
        />
        <TextArea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <Button disabled={!content || !title} type="submit" value="Create" />
        <a className={styles.back} href="#" onClick={() => Router.push("/")}>
          or Cancel
        </a>
      </form>
    </Layout>
  );
};

export default Draft;

//TODO #2 set up Slate editor to replace textareas

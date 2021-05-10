import React, { useState } from "react";
import Layout from "@components/Layout/Layout";
import Title from "@components/Title/Title";
import TextArea from "@components/TextArea/TextArea";
import TextInput from "@components/TextInput/TextInput";
import Router from "next/router";

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
        <input disabled={!content || !title} type="submit" value="Create" />
        <a className="back" href="#" onClick={() => Router.push("/")}>
          or Cancel
        </a>
      </form>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;

//TODO #2 set up Slate editor to replace textareas

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import Button from "../Button";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();

  let left = (
    <div className={styles.left}>
      <Link href="/">
        <a className={styles.bold} data-active={isActive("/")}>
          Feed
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (loading) {
    left = (
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.bold} data-active={isActive("/")}>
            Feed
          </a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className={styles.right}>
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.bold} data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts/">
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Button href="/create">
          <a>New post</a>
        </Button>
        <Button onClick={() => signOut()}>
          <a>Log out</a>
        </Button>
      </div>
    );
  }

  return (
    <nav className={styles.nav}>
      {left}
      {right}
    </nav>
  );
};

export default Header;

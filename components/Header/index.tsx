import React from "react";
import { signOut, useSession } from "next-auth/client";
import styles from "./Header.module.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  const [session, loading] = useSession();

  //Default view has "Feed" link on left and nothing else
  //If Loading, say "Feed" on left and "Validating session" on right
  //If no session, say "Log In" on right
  //If session, say "Feed" and "My drafts" on left and "New Post" and "Log Out" on right

  return (
    <header className={styles.header}>
      <HeaderLeft session={!!session} />
      <HeaderRight session={session} loading={!!loading} signOut={signOut} />
    </header>
  );
};

export default Header;

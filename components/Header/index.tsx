import React from "react";
import { signOut, useSession } from "next-auth/client";
import { styled } from "../../stitches.config";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const StyledHeader = styled("header", {
  display: "flex",
  padding: "2rem",
  alignItems: "center",

  "& a": {
    textDecoration: "none",
    display: "inline-block"
  },

  "& p": {
    display: "inline-block",
    fontSize: "13px",
    paddingRight: "1rem"
  },

  "& a + a": {
    marginLeft: "1rem"
  }
});

const Header: React.FC = () => {
  const [session, loading] = useSession();

  //Default view has "Feed" link on left and nothing else
  //If Loading, say "Feed" on left and "Validating session" on right
  //If no session, say "Log In" on right
  //If session, say "Feed" and "My drafts" on left and "New Post" and "Log Out" on right

  return (
    <StyledHeader>
      <HeaderLeft session={!!session} />
      <HeaderRight session={session} loading={!!loading} signOut={signOut} />
    </StyledHeader>
  );
};

export default Header;

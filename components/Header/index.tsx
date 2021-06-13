import React from "react";
import { signOut, useSession } from "next-auth/client";
import { styled } from "../../stitches.config";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { Logo } from "@components/Logo";
import { SearchBar } from "@components/SearchBar";
import { MenuButton } from "@components/Menu";

const StyledHeader = styled("header", {
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  alignItems: "stretch",
  borderBottom: "2px solid black",

  "& a": {
    textDecoration: "none",
    display: "inline-block",
    color: "black"
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
      {/* <HeaderLeft session={!!session} />
      <HeaderRight session={session} loading={!!loading} signOut={signOut} /> */}
      <Logo />
      <SearchBar />
      <MenuButton />
    </StyledHeader>
  );
};

export default Header;

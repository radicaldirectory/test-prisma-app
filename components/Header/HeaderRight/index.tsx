import Link from "next/link";
import { Button } from "@components/Button";
import { styled } from "../../../stitches.config";

export interface HeaderRightProps {
  session?: {
    user?: {
      name?: string;
      email?: string;
    };
  };
  loading?: boolean;
  signOut: () => any;
}

const StyledHeaderRight = styled("div", {
  marginLeft: "auto"
});

const HeaderRight: React.FC<HeaderRightProps> = ({
  session,
  loading,
  signOut
}) => {
  const validatingSession = <p>Validating session ...</p>;
  const loginLink = (
    <Link href="/api/auth/signin">
      <a>Log in</a>
    </Link>
  );
  const userInfo = (
    <p>
      {session?.user.name} – {session?.user.email}
    </p>
  );
  const newPost = (
    <Button>
      <a href="/create">New post</a>
    </Button>
  );
  const logOut = (
    <Button onClick={() => signOut()}>
      <a>Log out</a>
    </Button>
  );

  // styledheaderright replaces div with className={styles.right}

  return (
    <StyledHeaderRight>
      {loading ? validatingSession : null}
      {session ? (
        <>
          {userInfo}
          {newPost}
          {logOut}
        </>
      ) : (
        loginLink
      )}
    </StyledHeaderRight>
  );
};

export default HeaderRight;

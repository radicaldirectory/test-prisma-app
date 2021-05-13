import Link from "next/link";
import styles from "../Header.module.css";
import Button from "@components/Button";

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
      {session?.user.name} ({session?.user.email})
    </p>
  );
  const newPost = (
    <Button href="/create">
      <a>New post</a>
    </Button>
  );
  const logOut = (
    <Button onClick={() => signOut()}>
      <a>Log out</a>
    </Button>
  );

  return (
    <div className={styles.right}>
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
    </div>
  );
};

export default HeaderRight;

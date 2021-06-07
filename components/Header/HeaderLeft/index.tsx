import Link from "next/link";
export interface HeaderLeftProps {
  session: boolean;
}

//I removed a 'data-active' attribute from the <a> tags, which were set to a function
//that determined if they were addressed in the route, and to which the CSS referred
//to make the active link grey to appear disabled
const HeaderLeft: React.FC<HeaderLeftProps> = ({ session }) => {
  const draftsLink = (
    <Link href="/drafts/">
      <a>My drafts</a>
    </Link>
  );

  return (
    <nav>
      <Link href="/">
        <a>Feed</a>
      </Link>
      {session ? draftsLink : null}
    </nav>
  );
};

export default HeaderLeft;

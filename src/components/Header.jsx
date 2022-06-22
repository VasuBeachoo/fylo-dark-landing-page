import Logo from "./Logo";
import Link from "./Link";

const Header = () => {
  const block = "header";

  let key = 0;
  const navLinks = ["Features", "Team", "Sign In"];

  return (
    <header className={block}>
      <Logo block={block} />
      {navLinks.map((linkText) => {
        return <Link key={key++} block={block} text={linkText} />;
      })}
    </header>
  );
};

export default Header;

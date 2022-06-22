import Logo from "./Logo";
import Link from "./Link";

const Header = () => {
  const block = "header";

  let key = 0;
  const navLinks = ["Features", "Team", "Sign In"];

  return (
    <header className={block}>
      <Logo block={block} />
      <div className={`${block}__links`}>
        {navLinks.map((linkText) => {
          return <Link key={key++} block={block} text={linkText} />;
        })}
      </div>
    </header>
  );
};

export default Header;

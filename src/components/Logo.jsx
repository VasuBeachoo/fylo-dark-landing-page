import logoImg from "../assets/logo.svg";

const Logo = ({ block }) => {
  return <img src={logoImg} alt="logo" className={`${block}__logo`} />;
};

export default Logo;

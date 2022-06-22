import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";
import LocationIcon from "../assets/icon-location.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import EmailIcon from "../assets/icon-email.svg";
import IconText from "./IconText";
import Link from "./Link";

const Footer = () => {
  const block = "footer";

  return (
    <footer className={block}>
      <img src={Logo} alt="logo" className={`${block}__logo`} />
      <div className={`${block}__container`}>
        <div className={`${block}__column`}>
          <IconText block={block} iconSrc={LocationIcon} iconAlt="location" />
        </div>
        <div className={`${block}__column`}>
          <IconText block={block} iconSrc={PhoneIcon} iconAlt="phone" />
          <IconText block={block} iconSrc={EmailIcon} iconAlt="email" />
        </div>
        <div className={`${block}__column`}>
          <Link block={block} text="About Us" />
          <Link block={block} text="Jobs" />
          <Link block={block} text="Press" />
          <Link block={block} text="Blog" />
        </div>
        <div className={`${block}__column`}>
          <Link block={block} text="Contact Us" />
          <Link block={block} text="Terms" />
          <Link block={block} text="Privacy" />
        </div>
        <div className={`${block}__column`}>
          <div className={`${block}__social-icons`}>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

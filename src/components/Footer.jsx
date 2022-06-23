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
          <IconText
            block={block}
            iconSrc={LocationIcon}
            iconAlt="location"
            paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className={`${block}__column`}>
          <IconText
            block={block}
            iconSrc={PhoneIcon}
            iconAlt="phone"
            paragraphText="+1-543-123-4567"
          />
          <IconText
            block={block}
            iconSrc={EmailIcon}
            iconAlt="email"
            paragraphText="example@fylo.com"
          />
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
            <FontAwesomeIcon
              icon={faFacebookF}
              className={`${block}__social-icon`}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className={`${block}__social-icon`}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${block}__social-icon`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

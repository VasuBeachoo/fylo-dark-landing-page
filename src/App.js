import introImg from "./assets/illustration-intro.png";
import accessImg from "./assets/icon-access-anywhere.svg";
import securityImg from "./assets/icon-security.svg";
import collabImg from "./assets/icon-collaboration.svg";
import anyFileImg from "./assets/icon-any-file.svg";
import productiveImg from "./assets/illustration-stay-productive.png";
import arrowIcon from "./assets/icon-arrow.svg";
import profileOne from "./assets/profile-1.jpg";
import profileTwo from "./assets/profile-2.jpg";
import profileThree from "./assets/profile-3.jpg";
import Header from "./components/Header";
import Button from "./components/Button";
import Feature from "./components/Feature";
import Link from "./components/Link";
import Testimonial from "./components/Testimonial";
import CtaBlock from "./components/CtaBlock";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="page-container">
      <div className="page">
        <Header />
        <section className="intro">
          <img src={introImg} alt="intro" className="intro__img" />
          <h3 className="intro__heading">
            All your files in one secure location, accessible anywhere.
          </h3>
          <p className="intro__paragraph">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <Button block="intro" text="Get Started" />
        </section>
        <section className="features">
          <div className="features__row">
            <Feature
              imgSrc={accessImg}
              imgAlt="access"
              headingText="Access your files, anywhere"
              paragraphText="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
            />
            <Feature
              imgSrc={securityImg}
              imgAlt="security"
              headingText="Security you can trust"
              paragraphText="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
            />
          </div>
          <div className="features__row">
            <Feature
              imgSrc={collabImg}
              imgAlt="collaboration"
              headingText="Real-time collaboration"
              paragraphText="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
            />
            <Feature
              imgSrc={anyFileImg}
              imgAlt="any-file"
              headingText="Store any type of file"
              paragraphText="Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
            />
          </div>
        </section>
        <section className="highlight">
          <img
            src={productiveImg}
            alt="stay-productive"
            className="highlight__img"
          />
          <div className="highlight__text-container">
            <h3 className="highlight__heading">
              Stay productive, wherever you are
            </h3>
            <p className="highlight__paragraph">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="highlight__paragraph">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="highlight__link-container">
              <Link block="highlight" text="See how Fylo Works" />
              <img src={arrowIcon} alt="arrow" className="highlight__icon" />
            </div>
          </div>
        </section>
        <section className="testimonials">
          <Testimonial
            testimonialText="Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine."
            imgSrc={profileOne}
            imgAlt="profile-one"
            authorName="Satish Patel"
            authorTitle="Founder & CEO, Huddle"
          />
          <Testimonial
            testimonialText="Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine."
            imgSrc={profileTwo}
            imgAlt="profile-two"
            authorName="Bruce McKenzie"
            authorTitle="Founder & CEO, Huddle"
          />
          <Testimonial
            testimonialText="Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine."
            imgSrc={profileThree}
            imgAlt="profile-three"
            authorName="Iva Boyd"
            authorTitle="Founder & CEO, Huddle"
          />
        </section>
        <section className="cta">
          <CtaBlock
            block="cta"
            headingText="Get early access today"
            paragraphText="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
            errorText="Please enter a valid email address"
            btnText="Get Started For Free"
          />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;

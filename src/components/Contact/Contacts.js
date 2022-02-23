import classes from "./Contacts.module.css";

import instagramCircle from "../../assets/instagram-circle.png";
import youtubeCircle from "../../assets/youtube-circle.png";
import githubCircle from "../../assets/github-circle.png";
import email from "../../assets/email.png";
import cv from "../../assets/cv.png";

const Contacts = () => {
  return (
    <section className={classes["contacts-section"]}>
      <a
        href="https://www.instagram.com/lordhomie/"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <div className={classes["contacts-image"]}>
          <img src={instagramCircle} alt="Instagram link" />
        </div>
        <div className={classes["contacts-text"]}>
          <h3>Instagram</h3>
          <p>@LordHomie</p>
        </div>
      </a>
      <a
        href="https://www.youtube.com/c/babushkaboyz"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <div className={classes["contacts-image"]}>
          <img src={youtubeCircle} alt="Youtube link" />
        </div>
        <div className={classes["contacts-text"]}>
          <h3>Youtube</h3>
          <p>Babushka Boyz</p>
        </div>
      </a>
      <a
        href="https://github.com/LordHomie/"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <div className={classes["contacts-image"]}>
          <img src={githubCircle} alt="Github link" />
        </div>
        <div className={classes["contacts-text"]}>
          <h3>Github</h3>
          <p>@LordHomie</p>
        </div>
      </a>
      <div className={classes["email-cv-content"]}>
        <div className={classes["email-cv"]}>
          <img src={email} alt="Email address" />
          <p>Hamouda99@windowslive.com</p>
        </div>
        <div className={classes["email-cv"]}>
          <img src={cv} alt="CV file" />
          <p>Download CV</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

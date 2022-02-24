import { useState } from "react";

import classes from "./Contacts.module.css";

import instagramCircle from "../../assets/instagram-circle.png";
import instagramCircleHovered from "../../assets/instagram-hover.png";
import youtubeCircle from "../../assets/youtube-circle.png";
import youtubeCircleHovered from "../../assets/youtube-hover.png";
import githubCircle from "../../assets/github-circle.png";
import githubCircleHovered from "../../assets/github-hover.png";
import email from "../../assets/email.png";
import emailHovered from "../../assets/email-hover.png";
import cv from "../../assets/cv.png";
import cvHovered from "../../assets/cv-hover.png";

import cvDocument from "../../assets/cv-document.pdf";

const Contacts = () => {
  let cvImg = cv;
  const [isCvHovered, setIsCvHovered] = useState(cvImg);
  const [isCvtextHovered, setIsCvTextHovered] = useState(false);
  const cvHoverHandler = () => {
    setIsCvHovered(cvHovered);
    setIsCvTextHovered(true);
  };
  const cvNoHoverHandler = () => {
    setIsCvHovered(cvImg);
    setIsCvTextHovered(false);
  };

  let emailImg = email;
  const [isEmailHovered, setIsEmailHovered] = useState(emailImg);
  const [isEmailtextHovered, setIsEmailTextHovered] = useState(false);
  const emailHoverHandler = () => {
    setIsEmailHovered(emailHovered);
    setIsEmailTextHovered(true);
  };
  const emailNoHoverHandler = () => {
    setIsEmailHovered(emailImg);
    setIsEmailTextHovered(false);
  };

  let instagramImg = instagramCircle;
  const [isInstagramHovered, setIsInstagramHovered] = useState(instagramImg);
  const [isInstagramtextHovered, setIsInstagramTextHovered] = useState(false);
  const instagramHoverHandler = () => {
    setIsInstagramHovered(instagramCircleHovered);
    setIsInstagramTextHovered(true);
  };
  const instagramNoHoverHandler = () => {
    setIsInstagramHovered(instagramImg);
    setIsInstagramTextHovered(false);
  };

  let youtubeImg = youtubeCircle;
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(youtubeImg);
  const [isYoutubetextHovered, setIsYoutubeTextHovered] = useState(false);
  const youtubeHoverHandler = () => {
    setIsYoutubeHovered(youtubeCircleHovered);
    setIsYoutubeTextHovered(true);
  };
  const youtubeNoHoverHandler = () => {
    setIsYoutubeHovered(youtubeImg);
    setIsYoutubeTextHovered(false);
  };

  let githubImg = githubCircle;
  const [isGithubHovered, setIsGithubHovered] = useState(githubImg);
  const [isGithubtextHovered, setIsGithubTextHovered] = useState(false);
  const githubHoverHandler = () => {
    setIsGithubHovered(githubCircleHovered);
    setIsGithubTextHovered(true);
  };
  const githubNoHoverHandler = () => {
    setIsGithubHovered(githubImg);
    setIsGithubTextHovered(false);
  };

  return (
    <section className={classes["contacts-section"]}>
      <a
        href="https://www.instagram.com/lordhomie/"
        target="_blank"
        rel="noreferrer"
        onMouseOver={instagramHoverHandler}
        onMouseLeave={instagramNoHoverHandler}
        className={`${classes.link} ${
          isInstagramtextHovered && classes["text-hover"]
        }`}
      >
        <div className={classes["contacts-image"]}>
          <img src={isInstagramHovered} alt="Instagram link" />
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
        onMouseOver={youtubeHoverHandler}
        onMouseLeave={youtubeNoHoverHandler}
        className={`${classes.link} ${
          isYoutubetextHovered && classes["text-hover"]
        }`}
      >
        <div className={classes["contacts-image"]}>
          <img src={isYoutubeHovered} alt="Youtube link" />
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
        onMouseOver={githubHoverHandler}
        onMouseLeave={githubNoHoverHandler}
        className={`${classes.link} ${
          isGithubtextHovered && classes["text-hover"]
        }`}
      >
        <div className={classes["contacts-image"]}>
          <img src={isGithubHovered} alt="Github link" />
        </div>
        <div className={classes["contacts-text"]}>
          <h3>Github</h3>
          <p>@LordHomie</p>
        </div>
      </a>
      <div className={classes["email-cv-content"]}>
        <a href="mailto:Hamouda99@windowslive.com">
          <div
            onMouseOver={emailHoverHandler}
            onMouseLeave={emailNoHoverHandler}
            className={`${classes["email-cv"]} ${
              isEmailtextHovered && classes["text-hover"]
            }`}
          >
            <img src={isEmailHovered} alt="Email address" />
            <p>Hamouda99@windowslive.com</p>
          </div>
        </a>
        <a href={cvDocument} target="_blank" rel="noreferrer">
          <div
            onMouseOver={cvHoverHandler}
            onMouseLeave={cvNoHoverHandler}
            className={`${classes["email-cv"]} ${
              isCvtextHovered && classes["text-hover"]
            }`}
          >
            <img src={isCvHovered} alt="CV file" />
            <p>Download CV</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contacts;

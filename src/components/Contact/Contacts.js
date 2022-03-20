import { useState } from "react";
import SocialMediaContactConfiguration from "./SocialMediaContactConfiguration";
import EmailCvConfiguration from "./EmailCvConfiguration";

import classes from "./Contacts.module.css";

import instagramCircle from "../../assets/instagram-circle.png";
import instagramCircleHovered from "../../assets/instagram-hover.png";
import linkedinCircle from "../../assets/linkedin-circle.png";
import linkedinCircleHovered from "../../assets/linkedin-hover.png";
import youtubeCircle from "../../assets/youtube-circle.png";
import youtubeCircleHovered from "../../assets/youtube-hover.png";
import githubCircle from "../../assets/github-circle.png";
import githubCircleHovered from "../../assets/github-hover.png";
import email from "../../assets/email.png";
import emailHovered from "../../assets/email-hover.png";
import cv from "../../assets/cv.png";
import cvHovered from "../../assets/cv-hover.png";

import englishCV from "../../assets/english-cv.pdf";
import russianCV from "../../assets/russian-cv.pdf";

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

  let linkedinImg = linkedinCircle;
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(linkedinImg);
  const [isLinkedintextHovered, setIsLinkedinTextHovered] = useState(false);
  const linkedinHoverHandler = () => {
    setIsLinkedinHovered(linkedinCircleHovered);
    setIsLinkedinTextHovered(true);
  };
  const linkedinNoHoverHandler = () => {
    setIsLinkedinHovered(linkedinImg);
    setIsLinkedinTextHovered(false);
  };

  return (
    <section className={classes["contacts-section"]}>
      <SocialMediaContactConfiguration
        href={"https://www.instagram.com/lordhomie/"}
        onMouseOver={instagramHoverHandler}
        onMouseLeave={instagramNoHoverHandler}
        isTextHovered={isInstagramtextHovered}
        textHover={"text-hover"}
        src={isInstagramHovered}
        socialMediaName={"Instagram"}
        username={"@LordHomie"}
      />
      <SocialMediaContactConfiguration
        href={"https://github.com/LordHomie/"}
        onMouseOver={githubHoverHandler}
        onMouseLeave={githubNoHoverHandler}
        isTextHovered={isGithubtextHovered}
        textHover={"text-hover"}
        src={isGithubHovered}
        socialMediaName={"Github"}
        username={"@LordHomie"}
      />
      <SocialMediaContactConfiguration
        href={"https://www.linkedin.com/in/mohamad-abo-alnaser-63aa03233"}
        onMouseOver={linkedinHoverHandler}
        onMouseLeave={linkedinNoHoverHandler}
        isTextHovered={isLinkedintextHovered}
        textHover={"text-hover"}
        src={isLinkedinHovered}
        socialMediaName={"LinkedIn"}
        username={"mohamad-abo-alnaser"}
      />
      <SocialMediaContactConfiguration
        href={"https://www.youtube.com/c/babushkaboyz"}
        onMouseOver={youtubeHoverHandler}
        onMouseLeave={youtubeNoHoverHandler}
        isTextHovered={isYoutubetextHovered}
        textHover={"text-hover"}
        src={isYoutubeHovered}
        socialMediaName={"Youtube"}
        username={"Babushka Boyz"}
      />
      <div className={classes["email-cv-content"]}>
        <EmailCvConfiguration
          href="mailto:Hamouda99@windowslive.com"
          onMouseOver={emailHoverHandler}
          onMouseLeave={emailNoHoverHandler}
          isTextHovered={isEmailtextHovered}
          src={isEmailHovered}
          title={"Hamouda99@windowslive.com"}
        />
        <EmailCvConfiguration
          englishCV={englishCV}
          russianCV={russianCV}
          onMouseOver={cvHoverHandler}
          onMouseLeave={cvNoHoverHandler}
          isTextHovered={isCvtextHovered}
          src={isCvHovered}
          title={"Download CV"}
        />
      </div>
    </section>
  );
};

export default Contacts;

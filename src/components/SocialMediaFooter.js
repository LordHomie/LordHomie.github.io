import classes from "./SocialMediaFooter.module.css";

import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const SocialMediaFooter = () => {
  return (
    <section className={classes["content-left"]}>
      <h4 className={classes["footer-title"]}>LordHomie</h4>
      <div className={classes["social-media"]}>
        <div className={classes.instagram}>
          <a
            href="https://www.instagram.com/lordhomie/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className={classes.github}>
          <a
            href="https://github.com/LordHomie/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
        </div>
        <div className={classes.linkedin}>
          <a
            href="https://www.linkedin.com/in/mohamad-abo-alnaser-63aa03233"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className={classes.youtube}>
          <a
            href="https://www.youtube.com/c/babushkaboyz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFooter;

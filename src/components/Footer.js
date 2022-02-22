import classes from "./Footer.module.css";

import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
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
          <div className={classes.youtube}>
            <a
              href="https://www.youtube.com/c/babushkaboyz"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="Youtube" />
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
        </div>
      </section>
      <section className={classes["content-right"]}>
        <h4>
          Made using
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
        </h4>
      </section>
    </div>
  );
};

export default Footer;

import classes from "./Contacts.module.css";

import instagramCircle from "../../assets/instagram-circle.png";
import youtubeCircle from "../../assets/youtube-circle.png";
import githubCircle from "../../assets/github-circle.png";

const Contacts = () => {
  return (
    <section className={classes["contacts-section"]}>
      <a
        href="https://www.instagram.com/lordhomie/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramCircle} alt="Instagram link" />
        <div>
          <h3>Instagram</h3>
          <p>@LordHomie</p>
        </div>
      </a>
      <a
        href="https://www.youtube.com/c/babushkaboyz"
        target="_blank"
        rel="noreferrer"
      >
        <img src={youtubeCircle} alt="Youtube link" />
        <div>
          <h3>Youtube</h3>
          <p>Babushka Boyz</p>
        </div>
      </a>
      <a href="https://github.com/LordHomie/" target="_blank" rel="noreferrer">
        <img src={githubCircle} alt="Github link" />
        <div>
          <h3>Github</h3>
          <p>@LordHomie</p>
        </div>
      </a>
      <div></div>
    </section>
  );
};

export default Contacts;

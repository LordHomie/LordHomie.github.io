import LordhomiePicture from "../../assets/lordhomie.png";
import Button from "../UI/Button";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <section className={classes["image-section"]}>
        <img src={LordhomiePicture} alt="This is me!" />
      </section>
      <section className={classes.intro}>
        <div>
          Hi, I'm <span>Mohamad</span>. My creativity allows me to build
          experiences & interfaces.
        </div>
        <Button>Contact me</Button>
      </section>
    </div>
  );
};

export default Home;

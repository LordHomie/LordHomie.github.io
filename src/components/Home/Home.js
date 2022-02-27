import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";

import LordhomiePicture from "../../assets/lordhomie.png";
import Button from "../UI/Button";
import PositionModal from "../Modal/PositionModal";
import Contacts from "../Contact/Contacts";
import ComponentContext from "../../store/component-context";

import classes from "./Home.module.css";

const Home = () => {
  const position = "Front-End";
  const text = "Developer";

  const navigate = useNavigate();
  const navigateToContactHandler = () => {
    navigate("/contact");
  };

  const componentNameCtx = useContext(ComponentContext);
  Home.displayName = "Home";
  const componentIdentifier = Home.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
      <div className={`${classes.home} ${classes.animation}`}>
        <section className={classes["image-section"]}>
          <img src={LordhomiePicture} alt="This is me!" />
        </section>
        <section className={classes.intro}>
          <div>
            Hi, I'm <span>Mohamad</span>. My creativity allows me to build
            experiences & interfaces.
          </div>
          <Button onClick={navigateToContactHandler}>Contact me</Button>
        </section>
        <PositionModal
          animationStyle={classes.animation}
          position={position}
          text={text}
        />
      </div>
      <Contacts />
    </Fragment>
  );
};

export default Home;

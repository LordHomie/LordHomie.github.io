import { Fragment, useContext, useState } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";

import LordHomieImg from "../../assets/lordhomie2.jpg";
import location from "../../assets/location.png";
import locationHovered from "../../assets/location-hover.png";

import classes from "./About.module.css";

const About = () => {
  const componentNameCtx = useContext(ComponentContext);
  About.displayName = "About";
  const componentIdentifier = About.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  const locationImg = location;
  const [isLocationHovered, setIsLocationHovered] = useState(locationImg);

  const locationHoveredHandler = () => {
    setIsLocationHovered(locationHovered);
  };

  const locationNotHoveredHandler = () => {
    setIsLocationHovered(location);
  };

  return (
    <Fragment>
      <section className={`${classes.about} ${classes.animation}`}>
        <div className={classes["about-left-content"]}>
          <h1 className={classes["about-title"]}>About me</h1>
          <div className={classes["about-description"]}>
            <p className={classes["about-parag"]}>
              I’m Mohamad Abo Alnaser, a 23 years old
              <span> Front-end Developer</span> and <span>Youtuber</span>.
            </p>
            <p className={classes["about-parag"]}>
              My creativity allows me to build user interfaces, based on human
              feelings and needs. I'm always learning new software technologies
              and strategies to develop my skills.
            </p>
          </div>
          <div
            onMouseOver={locationHoveredHandler}
            onMouseLeave={locationNotHoveredHandler}
            className={classes["about-location"]}
          >
            <img src={isLocationHovered} alt="Location" />
            <span>Moscow, Russia</span>
          </div>
        </div>
        <div className={classes["about-right-content"]}>
          <img src={LordHomieImg} alt="Me at the Red Square" />
        </div>
      </section>

      <Contacts />
    </Fragment>
  );
};

export default About;

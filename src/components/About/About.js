import { Fragment, useContext } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";

const About = () => {
  const componentNameCtx = useContext(ComponentContext);
  About.displayName = "About";
  const componentIdentifier = About.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
      <h1>About component</h1>
      <Contacts />
    </Fragment>
  );
};

export default About;

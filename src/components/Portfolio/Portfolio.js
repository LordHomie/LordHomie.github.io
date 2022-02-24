import { Fragment, useContext } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";

const Portfolio = () => {
  const componentNameCtx = useContext(ComponentContext);
  Portfolio.displayName = "Portfolio";
  const componentIdentifier = Portfolio.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
      <h1>Portfolio component</h1>
      <Contacts />
    </Fragment>
  );
};

export default Portfolio;

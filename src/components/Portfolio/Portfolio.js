import { Fragment, useContext } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";
// import PortfolioPageCarousels from "./PortfolioPageCarousels";

const Portfolio = () => {
  const componentNameCtx = useContext(ComponentContext);
  Portfolio.displayName = "Portfolio";
  const componentIdentifier = Portfolio.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
      <h1>Hard-Skills & Experiences</h1>
      {/* <PortfolioPageCarousels slidesPerView={2} /> */}
      <Contacts />
    </Fragment>
  );
};

export default Portfolio;

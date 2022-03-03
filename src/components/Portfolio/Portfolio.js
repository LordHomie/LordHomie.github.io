import { Fragment, useContext, useEffect, useState } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";
import PortfolioPageCarousels from "./PortfolioPageCarousels";

import classes from "./Portfolio.module.css";

const Portfolio = () => {
  const componentNameCtx = useContext(ComponentContext);
  Portfolio.displayName = "Portfolio";
  const componentIdentifier = Portfolio.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  const [numOfSlides, SetNumOfSlides] = useState(1);

  const debounceResize = (handleResizeFunc) => {
    let timer;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleResizeFunc();
      }, 300);
    };
  };

  const resizeDiameters = () => {
    if (window.innerWidth > 1440) {
      SetNumOfSlides(4);
    } else if (window.innerWidth > 1024) {
      SetNumOfSlides(3);
    } else if (window.innerWidth > 768) {
      SetNumOfSlides(2);
    } else {
      SetNumOfSlides(1);
    }
  };

  useEffect(() => {
    resizeDiameters();
    const debouncedHandleResize = debounceResize(() => {
      resizeDiameters();
    });

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <Fragment>
      {/* <section className={classes.portfolio}>
        <h1>Hard-Skills & Experiences</h1>
      </section> */}
      <PortfolioPageCarousels slidesPerView={numOfSlides} />

      <Contacts />
    </Fragment>
  );
};

export default Portfolio;

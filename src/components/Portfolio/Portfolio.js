import { Fragment, useContext, useEffect, useState } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";
import PortfolioPageCarousels from "./PortfolioPageCarousels";

const Portfolio = () => {
  const componentNameCtx = useContext(ComponentContext);
  Portfolio.displayName = "Portfolio";
  const componentIdentifier = Portfolio.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  let num;
  let projectImgWidth;
  if (window.innerWidth > 1440) {
    num = 4;
    projectImgWidth = "40%";
  } else if (window.innerWidth > 1024) {
    num = 3;
    projectImgWidth = "50%";
  } else if (window.innerWidth > 768) {
    num = 2;
    projectImgWidth = "60%";
  } else {
    num = 1;
    projectImgWidth = "80%";
  }

  const [numOfSlides, SetNumOfSlides] = useState(num);
  const [projectImgWidthLarge, setProjectImgWidthLarge] =
    useState(projectImgWidth);

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
      setProjectImgWidthLarge("40%");
    } else if (window.innerWidth > 1024) {
      SetNumOfSlides(3);
      setProjectImgWidthLarge("50%");
    } else if (window.innerWidth > 768) {
      SetNumOfSlides(2);
      setProjectImgWidthLarge("60%");
    } else {
      SetNumOfSlides(1);
      setProjectImgWidthLarge("80%");
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
      <PortfolioPageCarousels
        slidesPerView={numOfSlides}
        projectImgWidthLarge={projectImgWidthLarge}
      />
      <Contacts />
    </Fragment>
  );
};

export default Portfolio;

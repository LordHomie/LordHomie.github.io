import CarouselsWrapper from "../Carousel/CarouselsWrapper";
import Carousel from "../Carousel/Carousel";

import classes from "./PortfolioPageCarousels.module.css";

import javascript from "../../assets/carousel-imgs/skills-imgs/javascript.jpg";
import htmlImg from "../../assets/carousel-imgs/skills-imgs/html-img.png";
import css from "../../assets/carousel-imgs/skills-imgs/css3.png";
import react from "../../assets/carousel-imgs/skills-imgs/react.png";
import bootstrap from "../../assets/carousel-imgs/skills-imgs/bootstrap.png";
import python from "../../assets/carousel-imgs/skills-imgs/python.jpg";
import flask from "../../assets/carousel-imgs/skills-imgs/flask.png";
import cPlusPlus from "../../assets/carousel-imgs/skills-imgs/cplusplus.png";
import java from "../../assets/carousel-imgs/skills-imgs/java.jpg";
import databases from "../../assets/carousel-imgs/skills-imgs/databases.jpg";
import github from "../../assets/carousel-imgs/skills-imgs/github.jpg";
import docker from "../../assets/carousel-imgs/skills-imgs/docker.jpg";

const hardSkillsArr = [
  {
    id: "i1",
    img: javascript,
    title: "JavaScript (ES6+)",
  },
  {
    id: "i2",
    img: react,
    title: "React",
  },
  {
    id: "i3",
    img: htmlImg,
    title: "HTML5",
  },
  {
    id: "i4",
    img: css,
    title: "CSS3",
  },
  {
    id: "i5",
    img: bootstrap,
    title: "Bootstrap",
  },
  {
    id: "i6",
    img: python,
    title: "Python",
  },
  {
    id: "i7",
    img: flask,
    title: "Flask Framework",
  },
  {
    id: "i8",
    img: cPlusPlus,
    title: "C++",
  },
  {
    id: "i9",
    img: java,
    title: "Java",
  },
  {
    id: "i10",
    img: databases,
    title: "Databases",
  },
  {
    id: "i11",
    img: github,
    title: "Github",
  },
  {
    id: "i12",
    img: docker,
    title: "Docker",
  },
];

const PortfolioPageCarousels = (props) => {
  return (
    <section className={classes["carousels-section"]}>
      <h3 className={classes["portfolio-header"]}>Hard-Skills & Experiences</h3>
      <CarouselsWrapper>
        <Carousel
          carouselArr={hardSkillsArr}
          slidesPerView={props.slidesPerView}
          swiperClass={classes.swiper}
          width={"100%"}
          imgWidth={"80%"}
          spaceBetween={10}
        ></Carousel>
      </CarouselsWrapper>
    </section>
  );
};

export default PortfolioPageCarousels;

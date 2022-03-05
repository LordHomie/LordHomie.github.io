import { Fragment } from "react";
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

import expensesProject from "../../assets/carousel-imgs/projects-imgs/expenses-project.gif";
import foodmenuProject from "../../assets/carousel-imgs/projects-imgs/foodmenu-project.gif";
import weatherProject from "../../assets/carousel-imgs/projects-imgs/weather-project.jpg";
import socialmediaProject from "../../assets/carousel-imgs/projects-imgs/socialmedia-project.png";
import moreProjects from "../../assets/carousel-imgs/projects-imgs/moreprojects.jpg";

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

const htmlTag = (
  <span key="t1" className={classes.htmlTag}>
    HTML
  </span>
);
const cssTag = (
  <span key="t2" className={classes.cssTag}>
    CSS
  </span>
);
const JSTag = (
  <span key="t3" className={classes.jsTag}>
    JavaScript
  </span>
);
const reactTag = (
  <span key="t4" className={classes.reactTag}>
    React
  </span>
);
const pythonTag = (
  <span key="t5" className={classes.pythonTag}>
    Python
  </span>
);
const flaskTag = (
  <span key="t6" className={classes.flaskTag}>
    Flask
  </span>
);
const sqliteTag = (
  <span key="t7" className={classes.sqliteTag}>
    SQLite
  </span>
);
const githubTag = (
  <span key="t8" className={classes.githubTag}>
    Github
  </span>
);

const projectsArr = [
  {
    id: "i1",
    img: expensesProject,
    title: (
      <a
        href="https://github.com/LordHomie/expenses-react-mini_project"
        target="_blank"
        rel="noreferrer"
      >
        Expenses App
      </a>
    ),
    parag: "A web application for adding expenses",
    tags: [htmlTag, cssTag, JSTag, reactTag],
  },
  {
    id: "i2",
    img: foodmenuProject,
    title: (
      <a
        href="https://github.com/LordHomie/food-menu-react-project"
        target="_blank"
        rel="noreferrer"
      >
        Food Menu App
      </a>
    ),
    parag:
      "A web application for adding/removing items from the cart and calculating the total price",
    tags: [htmlTag, cssTag, JSTag, reactTag],
  },
  {
    id: "i3",
    img: weatherProject,
    title: (
      <a
        href="https://github.com/LordHomie/Python-project__Web-and-SQL"
        target="_blank"
        rel="noreferrer"
      >
        Weather App
      </a>
    ),
    parag:
      "A web application for parsing forecast data of any city up tp 2 weeks",
    tags: [htmlTag, pythonTag, flaskTag, sqliteTag],
  },
  {
    id: "i4",
    img: socialmediaProject,
    title: (
      <a
        href="https://github.com/LordHomie/Phystechgram"
        target="_blank"
        rel="noreferrer"
      >
        Social Media App
      </a>
    ),
    parag:
      "A web application that allows users to sign up, add personal information, add friends and send messages to them. Also, publish posts and leave commetns on them",
    tags: [htmlTag, JSTag, pythonTag, flaskTag, sqliteTag],
  },
  {
    id: "i5",
    img: moreProjects,
    title: (
      <a href="https://github.com/LordHomie" target="_blank" rel="noreferrer">
        More Projects
      </a>
    ),
    parag: "Other projects are available on my Github!",
    tags: [githubTag],
  },
];

const PortfolioPageCarousels = (props) => {
  return (
    <Fragment>
      <section className={classes["carousels-section"]}>
        <div className={classes["portfolio-header"]}>
          <h3>Hard-Skills & Experiences</h3>
        </div>
        <CarouselsWrapper>
          <Carousel
            carouselArr={hardSkillsArr}
            slidesPerView={props.slidesPerView}
            swiperClass={classes.swiperSkills}
            width={"100%"}
            imgWidth={"80%"}
            spaceBetween={10}
          ></Carousel>
        </CarouselsWrapper>
        <div className={classes["portfolio-header"]}>
          <h3>Projects</h3>
        </div>
        <CarouselsWrapper>
          <Carousel
            carouselArr={projectsArr}
            slidesPerView={1}
            swiperClass={classes.swiperProjects}
            width={"100%"}
            imgWidth={"80%"}
            spaceBetween={10}
          ></Carousel>
        </CarouselsWrapper>
      </section>
    </Fragment>
  );
};

export default PortfolioPageCarousels;

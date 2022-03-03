import CarouselsWrapper from "../Carousel/CarouselsWrapper";
import Carousel from "../Carousel/Carousel";

import classes from "./AboutPageCarousels.module.css";

import teamwork from "../../assets/carousel-imgs/teamwork.jpg";
import resultsOrientation from "../../assets/carousel-imgs/results-orientation.jpg";
import timeManagement from "../../assets/carousel-imgs/time-management.webp";
import problemSolving from "../../assets/carousel-imgs/problem-solving.jpg";

import frontend from "../../assets/carousel-imgs/frontend.jpg";
import backend from "../../assets/carousel-imgs/backend.jpg";
import youtube from "../../assets/carousel-imgs/youtube.jpg";
import languages from "../../assets/carousel-imgs/languages.jpg";

const skillsArr = [
  {
    id: "i1",
    img: teamwork,
    title: "Teamwork",
    parag:
      "I'm able to work well in a team, collaborating with my colleagues to achieve our goals.",
  },
  {
    id: "i2",
    img: resultsOrientation,
    title: "Results Orientation",
    parag:
      "Constantly focused on the goals. I'm used to work under pressure and getting the work done to meet deadlines.",
  },
  {
    id: "i3",
    img: timeManagement,
    title: "Time Management",
    parag:
      "Very good at managing my time between work, studies and other activities as I have been able to manage my time well since high school.",
  },
  {
    id: "i4",
    img: problemSolving,
    title: "Problem Solving",
    parag:
      "Always dedicated to solving problems no matter how much time it takes to get solved.",
  },
];

const experienceArr = [
  {
    id: "i1",
    img: frontend,
    title: "Frontend Development",
    parag:
      "I've been taking courses on frontend development for more than a year and I built several application with React. I feel comfortable with it and I would like to pursue my career on this path.",
  },
  {
    id: "i2",
    img: backend,
    title: "Backend Development",
    parag:
      "Sometimes, I like to integrate frontend with backend since I built many web applications with Flask (Python framework). I can tell that I'm really good at it.",
  },
  {
    id: "i3",
    img: youtube,
    title: "I'm a Youtuber!",
    parag:
      "I love to spend my free time making interesting content for my Youtube channel and I hope to become successful at it.",
  },
  {
    id: "i4",
    img: languages,
    title: "Multilingual",
    parag:
      "And guess what? I'm multilingual person since I speak three langueages: Arabic, English and Russian.",
  },
];

const AboutPageCarousels = (props) => {
  return (
    <section className={classes["carousels-section"]}>
      <h3>A brief of my skills & experience</h3>
      <CarouselsWrapper>
        <Carousel
          carouselArr={skillsArr}
          slidesPerView={props.slidesPerView}
          spaceBetween={30}
        ></Carousel>
        <Carousel
          carouselArr={experienceArr}
          slidesPerView={props.slidesPerView}
          spaceBetween={30}
        ></Carousel>
      </CarouselsWrapper>
    </section>
  );
};

export default AboutPageCarousels;

import CarouselsWrapper from "../Carousel/CarouselsWrapper";
import Carousel from "../Carousel/Carousel";

import classes from "./PortfolioPageCarousels.module.css";

import teamwork from "../../assets/carousel-imgs/teamwork.jpg";
import resultsOrientation from "../../assets/carousel-imgs/results-orientation.jpg";
import timeManagement from "../../assets/carousel-imgs/time-management.webp";
import problemSolving from "../../assets/carousel-imgs/problem-solving.jpg";

const hardSkillsArr = [
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

const PortfolioPageCarousels = (props) => {
  return (
    <section className={classes["carousels-section"]}>
      <CarouselsWrapper>
        <Carousel
          carouselArr={hardSkillsArr}
          slidesPerView={props.slidesPerView}
          swiperClass={classes.swiper}
          width={"80%"}
        ></Carousel>
      </CarouselsWrapper>
    </section>
  );
};

export default PortfolioPageCarousels;

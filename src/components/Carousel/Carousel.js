import { Fragment } from "react";

// Import Swiper React components
// https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";
import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Carousel = (props) => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.arr.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="slide preview" />
            <h2>{item.title}</h2>
            <p>{item.parag}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Carousel;

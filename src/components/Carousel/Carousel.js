import { Fragment } from "react";

// Import Swiper React components
// https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import "swiper/css/bundle";
import "./Carousel.css";

// import required modules
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";

const Carousel = (props) => {
  return (
    <Fragment>
      <Swiper
        className={`${"mySwiper"} ${props.swiperClass}`}
        style={{ width: props.width }}
        slidesPerView={props.slidesPerView}
        slidesPerGroup={props.slidesPerView}
        spaceBetween={props.spaceBetween}
        mousewheel={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Mousewheel, Autoplay, Pagination, Navigation]}
      >
        {props.carouselArr.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt="slide preview"
              className="swiper-slide-img"
              style={{ width: props.imgWidth }}
            />
            <h2>{item.title}</h2>
            <p>{item.parag}</p>
            <div className="tags">{item.tags}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Carousel;

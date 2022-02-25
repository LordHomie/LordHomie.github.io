const CarouselItem = (props) => {
  return (
    <li>
      <img src={props.img} alt="Carousel content" />
      <h3>{props.txt}</h3>
    </li>
  );
};

export default CarouselItem;

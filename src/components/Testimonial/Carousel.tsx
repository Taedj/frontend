import { ReactElement } from 'react'
import OriginalCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {
  children:ReactElement[]
}

// const Carousel = ({deviceType,children}:Props) => {
const Carousel = ({children}:Props) => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
      <Slider {...settings}>
        {children}
      </Slider>
  );
}

export default Carousel
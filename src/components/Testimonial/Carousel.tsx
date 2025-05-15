import { ReactElement } from 'react'
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {
  children:ReactElement[],
  slideToShow:number
}

// const Carousel = ({deviceType,children}:Props) => {
const Carousel = ({children,slideToShow}:Props) => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: slideToShow, 
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
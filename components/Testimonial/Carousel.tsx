import { ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import useIsMobile from "../../hooks/useIsMobile";

interface Props {
  children: ReactElement[];
  slideToShow: number;
}

// const Carousel = ({deviceType,children}:Props) => {
const Carousel = ({ children, slideToShow }: Props) => {
  const { isMobile } = useIsMobile();
  const settings = {
    dots: true,
    arrows: !isMobile,
    speed: 2000,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;

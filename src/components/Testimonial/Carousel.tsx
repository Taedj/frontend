import { ReactElement } from 'react'
import OriginalCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
    partialVisible: false
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
    partialVisible: false
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisible: false
  }
};


interface Props {
  deviceType:string,
  children:ReactElement[]
}

const Carousel = ({deviceType,children}:Props) => {
  return (
    <OriginalCarousel
      swipeable={true}
      draggable={true}
      showDots={false}
      partialVisible={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding"
      sliderClass="react-multi-carousel-track"
    >
      {children}
    </OriginalCarousel>
  )
}

export default Carousel
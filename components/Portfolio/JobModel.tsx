import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { dimensions } from "../../constants/constants";
import useJobModelSliderWidth from "../../hooks/useJobModelSliderWidth";
import "../Testimonial/Carousel.css";
import "./JobModel.css";

interface Props {
  title: string;
  images: string[];
  description: string;
  onClose: () => void;
}

const JobModel = ({ title, images, description, onClose }: Props) => {
  const { sliderWidth } = useJobModelSliderWidth();
  const { breakpoint } = dimensions;

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    adaptiveHeight: false,
    centerMode: false,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <div
      className="
            w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] 
            max-w-[90rem] 
            h-[85vh] sm:h-[85vh] md:h-[90vh] lg:h-[80vh] 
            p-4 sm:p-6 md:p-8 
            rounded-lg 
            bg-job-model 
            text-cell-description 
            mx-auto 
            overflow-auto
        "
    >
      <div className="flex justify-end mb-4" onClick={onClose}>
        <RxCross1 size={24} />
      </div>
      <h1 className="text-center text-5xl mb-12 font-semibold">{title}</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-5 md:px-10">
        <div
          className={`slider-container ${breakpoint ? "mobile" : "desktop"} w-full md:w-1/2`}
        >
          <Slider {...settings} className="h-full">
            {images.map((image) => (
              <div key={image} className="slide-item">
                <div className="h-full w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 px-2 sm:px-4">
          <h2 className="text-4xl font-semibold mb-4">Project Info:</h2>
          <p className="text-2xl sm:text-3xl leading-12 mb-12">{description}</p>

          <h2 className="text-4xl font-semibold mt-8 mb-5">Project Details:</h2>
          <ul className="mb-4 space-y-4">
            <li className="py-4 text-2xl sm:text-3xl border-b border-b-border">
              <span className="font-semibold">Client:</span> Ruby Clinton
            </li>
            <li className="py-4 text-2xl sm:text-3xl border-b border-b-border">
              <span className="font-semibold">Industry:</span> Art & Design
            </li>
            <li className="py-4 text-2xl sm:text-3xl border-b border-b-border">
              <span className="font-semibold">Date:</span> July 16, 2019
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobModel;

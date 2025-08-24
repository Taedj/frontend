import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { dimensions } from '../../constants/constants';
import useJobModelSliderWidth from '../../hooks/useJobModelSliderWidth';
import '../Testimonial/Carousel.css';
import './JobModel.css';

interface Props {
    title:string,
    images:string[],
    description:string,
    onClose: () => void;
}


const JobModel = ({title,images,description,onClose}:Props) => {
    const {sliderWidth} = useJobModelSliderWidth();
    const {breakpoint} = dimensions;
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '0px',
        arrows: false
    };
    return (
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 sm:px-6">
        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 sm:mb-4">Project Info:</h2>
        <p className="text-sm sm:text-base md:text-xl leading-relaxed sm:leading-8">
            {description}
        </p>

        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mt-6 sm:mt-10 mb-2 sm:mb-3">
            Project Details:
        </h2>
        <ul className="mb-6 text-sm sm:text-base md:text-xl">
            <li className="py-2 sm:py-3 border-b border-b-border">
            <span className="font-semibold">Client:</span> Ruby Clinton
            </li>
            <li className="py-2 sm:py-3 border-b border-b-border">
            <span className="font-semibold">Industry:</span> Art & Design
            </li>
            <li className="py-2 sm:py-3 border-b border-b-border">
            <span className="font-semibold">Date:</span> July 16,2019
            </li>
        </ul>
        </div>
    )
    }

export default JobModel
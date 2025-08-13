import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { colors, dimensions } from '../../constants/constants';
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
            <div className='h-[80vh] p-6 rounded-[8px] bg-job-model text-cell-description'>
                <div className='flex justify-end' onClick={onClose}><RxCross1 size={20}/></div>
                <h1 className='text-center text-4xl mb-10 font-semibold'>{title}</h1>
                <div className='flex max-md:flex-col px-5'>
                    <div className={`slider-container ${breakpoint ? 'mobile' : 'desktop'}`} style={{ width: sliderWidth }}>
                        <Slider {...settings} className="h-full">     
                            {
                                images.map(image => (
                                    <div key={image} className="slide-item">
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <img 
                                                src={image} 
                                                alt={title}
                                            />
                                        </div>
                                    </div>
                                ))
                            }                   
                        </Slider>
                    </div>
                    <div className='max-md:mt-20 px-10'>
                        <h2 className='text-3xl font-semibold'>Project Info:</h2>
                        <p className='text-2xl leading-12'>{description}</p>
                        <h2 className='text-3xl font-semibold mt-10 mb-3'>Project Details:</h2>
                        <ul className='mb-6'>
                            <li className='py-5 text-2xl border-b border-b-border'><span className='font-semibold'>Client:</span> Ruby Clinton</li>
                            <li className='py-5 text-2xl border-b border-b-border' ><span className='font-semibold'>Industry:</span> Art & Design</li>
                            <li className='py-5 text-2xl border-b border-b-border'><span className='font-semibold'>Date:</span> July 16,2019</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
    }

export default JobModel
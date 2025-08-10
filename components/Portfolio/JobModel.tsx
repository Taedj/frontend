import { colors } from '../../constants/constants'
import '../Testimonial/Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RxCross1 } from "react-icons/rx";
import './JobModel.css'

interface Props {
    sliderWidth: string;
    title:string,
    images:string[],
    description:string,
    breakpoint:boolean;
    onClose: () => void;
}

const getBodyContainerClassName = (breakpoint:boolean) => {
    return (breakpoint)? 'flex flex-col px-[1.2rem]':'flex px-[1.2rem]'
}

const getInfoContainerClassName = (breakpoint:boolean) => {
    return (breakpoint)? 'mt-[4.8rem] px-[1.2rem] px-[2.4rem]':'px-[1.2rem] px-[2.4rem]'
}

const JobModel = ({sliderWidth,title,images,description,breakpoint,onClose}:Props) => {
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
            <div className='h-[80vh] p-[1.6rem] text-white rounded-[8px]' style={{backgroundColor:colors.JobModelColor,color:colors.cellDescriptionColor}}>
                <div className='flex justify-end' onClick={onClose}><RxCross1 size={20}/></div>
                <h1 className='text-center text-[2.4rem] mb-[2.4rem] font-semibold'>{title}</h1>
                <div className={getBodyContainerClassName(breakpoint)}>
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
                    <div className={getInfoContainerClassName(breakpoint)}>
                        <h2 className='text-[1.8rem] font-semibold'>Project Info:</h2>
                        <p className='text-[1.6rem] lead-[2.9rem]'>{description}</p>
                        <h2 className='text-[1.8rem] font-semibold mt-[2.4rem] mb-[0.8rem]'>Project Details:</h2>
                        <ul className='mb-[1.6rem]'>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Client:</span> Ruby Clinton</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Industry:</span> Art & Design</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Date:</span> July 16,2019</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
    }

export default JobModel
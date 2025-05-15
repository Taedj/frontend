import React from 'react'
import { colors } from '../../constants/constants'
import Carousel from '../Testimonial/Carousel'
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import '../Testimonial/Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RxCross1 } from "react-icons/rx";

interface Props {
    sliderWidth: string;
    onClose: () => void;
}

const JobModel = ({sliderWidth,onClose}:Props) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false
    };
    return (
            <div className='h-[80vh] p-[1.6rem] text-white rounded-[8px]' style={{backgroundColor:colors.JobModelColor,color:colors.cellDescriptionColor}}>
                <div className='flex justify-end' onClick={onClose}><RxCross1 size={20}/></div>
                <h1 className='text-center text-[2.4rem] mb-[2.4rem] font-semibold'>Project Title</h1>
                <div className='flex px-[1.2rem]'>
                    <div className='h-[70vh]' style={{ width: sliderWidth }}>
                        <Slider {...settings} className="h-full">                        
                            <div >
                                <img className='w-full h-full object-cover' src={image1} />
                            </div>
                            <div >
                                <img className='w-full h-full object-cover' src={image2} />
                            </div>
                            <div >
                                <img className='w-full h-full object-cover' src={image3} />
                            </div>
                        </Slider>
                    </div>
                    <div className='px-[1.2rem] px-[2.4rem]'>
                        <h2 className='text-[1.8rem] font-semibold'>Project Info:</h2>
                        <p className='text-[1.6rem] lead-[2.9rem]'>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        <h2 className='text-[1.8rem] font-semibold mt-[2.4rem] mb-[0.8rem]'>Project Details:</h2>
                        <ul className='mb-[1.6rem]'>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Client:</span> Ruby Clinton</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Technologies:</span> iOS,HTML5,CSS3,PHP,Java</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Industry:</span> Art & Design</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>Date:</span> July 16,2019</li>
                            <li className='py-[1.2rem] text-[1.6rem] border-b' style={{borderBottomColor:colors.borderColor}}><span className='font-semibold'>URL:</span> www.example.com</li>
                            <li className='py-[1.2rem] text-[1.6rem]'>Share:</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
    }

export default JobModel
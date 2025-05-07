import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import TestimonialBox from './TestimonialBox'
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/danxavier.jpg'
import image2 from '../../assets/images/negro.jpg'
import Carousel from './Carousel'

const Testimonials = () => {
  return (
    <div id='Testimonials' className='py-[7.2rem] px-[4.8rem] w-full overflow-hidden'
      style={{
        backgroundColor:colors.backgroundDarkColor,
        fontFamily:fontSettings.fontFamily
      }}
    >
      <BackgroundText backgroundText='TESTIMONIAL' innerText='Client Speak'/>
      <div className='mt-[4.8rem] py-0 px-[2rem] max-w-[80%] mx-auto'>
        <Carousel>
          <TestimonialBox 
            image={image1} 
            title="Daniel Xavier" 
            subTitle="User from Spain" 
            testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
          />
          <TestimonialBox 
            image={image2} 
            title="Daniel Xavier" 
            subTitle="User from Spain" 
            testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
          />
          <TestimonialBox 
            image={image1} 
            title="Daniel Xavier" 
            subTitle="User from Spain" 
            testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
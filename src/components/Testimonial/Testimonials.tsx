import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import TestimonialBox from './TestimonialBox'
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/danxavier.jpg'
import image2 from '../../assets/images/negro.jpg'
import RadioButtonsList from './RadioButtonsList'
import Carousel from './Carousel'

const MainContainer = styled.div`
  background-color:${colors.backgroundDarkColor};
  font-family:${fontSettings.fontFamily};
  padding:7.2rem 4.8rem;
`

const ButtonsContainer = styled.div`
  display:flex;
  justify-content:center;
`

const TestimonialsContainer = styled(Carousel)`
  margin-top:4.8rem;
`


const Testimonials = () => {
  return (
    <MainContainer id="Testimonials">
      <BackgroundText backgroundText='TESTIMONIAL' innerText='Client Speak'/>
      <TestimonialsContainer deviceType='desktop'>
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
        <TestimonialBox 
          image={image1} 
          title="Daniel Xavier" 
          subTitle="User from Spain" 
          testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
        />
      </TestimonialsContainer>
      
      {/* <RadioButtonsList/> */}
    </MainContainer>
  )
}

export default Testimonials
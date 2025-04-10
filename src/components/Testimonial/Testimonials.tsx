import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import TestimonialBox from './TestimonialBox'
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/danxavier.jpg'


const MainContainer = styled.div`
  background-color:${colors.backgroundDarkColor};
  font-family:${fontSettings.fontFamily};

`


const Testimonials = () => {
  return (
    <MainContainer>
      <BackgroundText backgroundText='TESTIMONIAL' innerText='Client Speak'/>
      <TestimonialBox image={image1} title="Daniel Xavier" subTitle="User from Spain" testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."/>
    </MainContainer>
  )
}

export default Testimonials
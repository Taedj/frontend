import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import TestimonialBox from './TestimonialBox'
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/danxavier.jpg'
import RadioButtonsList from './RadioButtonsList'


const MainContainer = styled.div`
  background-color:${colors.backgroundDarkColor};
  font-family:${fontSettings.fontFamily};
`

const ButtonsContainer = styled.div`
  display:flex;
  justify-content:center;
`


const Testimonials = () => {
  return (
    <MainContainer id="Testimonials">
      <BackgroundText backgroundText='TESTIMONIAL' innerText='Client Speak'/>
      <TestimonialBox image={image1} title="Daniel Xavier" subTitle="User from Spain" testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."/>
      
      <RadioButtonsList/>
    </MainContainer>
  )
}

export default Testimonials
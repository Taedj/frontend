import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'
import HorizontalList from './HorizontalList'
import { colors ,fontSettings} from '../../constants/constants'



const AboutMainContainer = styled.div`
  background-color:${colors.backgroundLessDarkColor};
  font-family:${fontSettings.fontFamily};
  padding:7.2rem 0;
  font-size:1.6rem;
  color:white;
`

const BodyContainer = styled.div`
  display:flex;
  padding:4.8rem;
`

const About = () => {
  return (
    <>
      <AboutMainContainer>
        <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
        <BodyContainer>
          <Paragraph/>
          <VerticalList/>
        </BodyContainer>
        <HorizontalList/>
      </AboutMainContainer>
    </>
  )
}

export default About
import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'
import HorizontalList from './HorizontalList'
import { colors ,fontSettings} from '../../constants/constants'



const AboutMainContainer = styled.div`
  background-color:${colors.backgroundDarkColor};
  font-family:${fontSettings.fontFamily};
  padding:7.2rem 4.8rem;
  font-size:1.6rem;
  color:white;
`

const BodyContainer = styled.div`
  display:flex;
  width:100%;
`

const ParagraphContainer = styled.div`
  flex:3;
  min-width:0;
`
const VerticalListContainer = styled.div`
  flex:2;
  min-width:0;
`

const About = () => {
  return (
    <>
      {/* <AboutMainContainer id="About-Me">
        <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
        <BodyContainer>
          <ParagraphContainer>
            <Paragraph/>
          </ParagraphContainer>
          <VerticalListContainer>
            <VerticalList/>
          </VerticalListContainer>
        </BodyContainer>
        <HorizontalList/>
      </AboutMainContainer> */}
      <div id='About-me' className='py-[7.2rem] px-[4.8rem] text-[1.6rem] text-white' style={{backgroundColor:colors.backgroundDarkColor,fontFamily:fontSettings.fontFamily}}>
        <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
        <div className='flex w-full'>
          <div className='flex-3 min-w-0'>
            <Paragraph/>
          </div>
          <div className='flex-2 min-w-0'>
            <VerticalList/>
          </div>
        </div>
        <HorizontalList/>
      </div>
    </>
  )
}

export default About
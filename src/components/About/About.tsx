import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import { colors ,fontSettings} from '../../constants/constants'


const MainContainer = styled.div`
  background-color:${colors.backgroundLessDarkColor};
  font-family:${fontSettings.fontFamily};
  padding:7.2rem 0;
`

const About = () => {
  return (
    <>
      <MainContainer>
        <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
        <div>
          <Paragraph/>
        </div>
      </MainContainer>
    </>
  )
}

export default About
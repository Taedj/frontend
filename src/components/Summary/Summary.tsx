import React from 'react'
import styled from 'styled-components'
import { fontSettings,colors } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import SummaryBox from './SummaryBox'
import Skills from './Skills'
import Button from '../Button/Button'
import { FaDownload } from "react-icons/fa";


const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundDarkColor};
  color:white;
  padding:4.8rem;
`

const SummaryContainer = styled.div`
  display:flex;
`

const EducationTitle = styled.h2`
  font-size:2.4rem;
  padding-left:2.4rem;
`

const EducationContainer = styled.div`
`

const ExperienceTitle = styled.h2`
  font-size:2.4rem;
  padding-left:2.4rem;
`

const ExperienceContainer = styled.div`

`

const CVButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  margin:5rem;
`

const Summary = () => {
  return (
    <MainContainer id="Resume">
      <BackgroundText backgroundText="Summary" innerText="Resume"/>
      <SummaryContainer>
        <EducationContainer>
          <EducationTitle>My Education</EducationTitle>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
        </EducationContainer>
        <ExperienceContainer>
          <ExperienceTitle>My Experience</ExperienceTitle>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
          <SummaryBox 
            year="2000 - 2004" 
            title="Computer Science" 
            subTitle="International University">
              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          </SummaryBox>
        </ExperienceContainer>
      </SummaryContainer>
      <Skills/>
      <CVButtonContainer>
          <Button 
            color={colors.backgroundTextDarkColor}
            height="5.2rem"
            width="21.5rem"
            backGroundColor="rgba(0, 0, 0, 0)"
          >
            Download CV&nbsp;
            <FaDownload />
          </Button>
        </CVButtonContainer>
    </MainContainer>
  )
}

export default Summary
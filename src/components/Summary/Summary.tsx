import React from 'react'
import styled from 'styled-components'
import { fontSettings,colors } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import SummaryBox from './SummaryBox'


const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundDarkColor};
  color:white;
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



const Summary = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  )
}

export default Summary
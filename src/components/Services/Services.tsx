import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox from './ServiceBox'
import { colors,fontSettings } from '../../constants/constants'


const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundLessDarkColor};
  padding:7.2rem 0;
`

const BoxesContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  padding:0 4.8rem;
  gap:2rem;
`

const Services = () => {
  return (
    <MainContainer>
      <BackgroundText backgroundText="Services" innerText="What I Do?"/>
      <BoxesContainer>
        <ServiceBox title="Web Design" category="web design">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox>
        <ServiceBox  title="UI/UX Design" category="ux/ui">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox >
        <ServiceBox  title="Mechanical Engineering" category="mechanical engineering">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox>
        <ServiceBox  title="Teaching" category="teaching">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox>
      </BoxesContainer>
    </MainContainer>
  )
}

export default Services
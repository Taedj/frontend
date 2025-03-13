import React from 'react'
import styled from 'styled-components'
import ProgressRow from './ProgressRow'
import { colors } from '../../constants/constants'

const MainContainer = styled.div`
`

const Title = styled.h1`
  margin:2.4rem 0;
  font-size:2.4rem;
  font-weight:600;
`

const SkillsContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:4rem;
`



const Skills = () => {
  return (
    <MainContainer>
      <Title>My Skills</Title>
      <SkillsContainer>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
      </SkillsContainer>
    </MainContainer>
  )
}

export default Skills
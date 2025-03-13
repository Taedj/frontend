import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'

const MainContainer = styled.div`
    background-color:${colors.summaryBoxBackgroundColor};
    padding:2.4rem;
    margin:2.4rem;
    border-radius:5px;
`

const YearBadge = styled.span`
  height:2.4rem;
  width:10.2rem;
  background-color:${colors.primaryColor};
  font-size:1.4rem;
  border-radius:5px;
  padding:0.5rem 1rem;
`

const Title = styled.h1`
  font-size:2.1rem;
  margin-top:2rem;
  margin-bottom:0.8rem;
`

const SubTitle = styled.h2`
  font-size:1.6rem;
  color:${colors.primaryColor};
  margin-bottom:1.6rem;
`

const Body = styled.p`
  font-size:1.6rem;
  line-height:2.9rem;
  color:${colors.backgroundLessTextDarkColor};
`

interface Props {
  year:string;
  title:string;
  subTitle:string;
  children:string;
}

const SummaryBox = ({year,title,subTitle,children}:Props) => {
  return (
    <MainContainer>
      <YearBadge>{year}</YearBadge>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Body>{children}</Body>
    </MainContainer>
  )
}

export default SummaryBox
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'


const MainContainer = styled.div`
    margin-top:4.8rem;
    font-family;
    padding:0 1.2rem;
`

const Header = styled.h1`
    font-size:2.8rem;
    margin-bottom:1.6rem;
    color:white;
`

const ColorChanger = styled.span`
    color:${colors.primaryColor};
    text-alight:left;
`

const LongText = styled.p`
    color:${colors.backgroundLessTextDarkColor};
    margin-bottom;1.6rem;
    font-size:1.6rem;
    line-height:2.8rem;
`

const Paragraph = () => {
  return (
    <MainContainer>
        <Header>I'm <ColorChanger>Tidjani Zitouni,</ColorChanger> a Mechanical Engineer</Header>
        <LongText>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</LongText>
        <LongText>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</LongText>
    </MainContainer>
  )
}

export default Paragraph
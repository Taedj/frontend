import React from 'react'
import styled from 'styled-components'
import { colors,fontSettings} from '../../constants/constants'
import { AiFillStar } from "react-icons/ai";


const TestimonialContainer = styled.div`
  background-color:${colors.backgroundVeryDarkColor};
  border-radius:5px;
  font-family:${fontSettings.fontFamily};
  font-size:1.6rem;
  line-height:2.88rem;

  margin:1rem;
  padding:4.8rem;
  color:white;
`

const TestimonialHeader = styled.div`
  display:flex;
`

const TestimonialImageContainer = styled.div`
  height:6.7rem;
  width:6.7rem;
  & img {
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%;
  }
`

const TestimonialTitlesContainer = styled.div`
  margin-left:1.6rem;
`

const TestimonialTitle = styled.h1`
  font-size:1.6rem;
  margin:0;
`

const TestimonialSubTitle = styled.h2`
  font-size:1.6rem;
  margin:0;
  color:${colors.backgroundTextDarkColor}
`

const TestimonialBody = styled.p`
  font-weight:600;
`

const TestimonialRatingContainer = styled.div`

`

interface Props {
  image:string;
  title:string;
  subTitle:string;
  testomonial:string;
}



const TestimonialBox = ({image,title,subTitle,testomonial}:Props) => {
  return (
    <TestimonialContainer>
      <TestimonialHeader>
        <TestimonialImageContainer>
          <img src={image}/>
        </TestimonialImageContainer>
        <TestimonialTitlesContainer>
          <TestimonialTitle>{title}</TestimonialTitle>
          <TestimonialSubTitle>{subTitle}</TestimonialSubTitle>
        </TestimonialTitlesContainer>
      </TestimonialHeader>
      <TestimonialBody>{testomonial}</TestimonialBody>
      <TestimonialRatingContainer>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar />
      </TestimonialRatingContainer>
    </TestimonialContainer>
  )
}

export default TestimonialBox
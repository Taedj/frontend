import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { fontSettings,specialities,colors} from '../../constants/constants'
import engineeringBackground from '../../assets/pexels-olly-3817858.jpg'
import Button from '../Button/Button'
import Chevron from '../Chevron/Chevron'


const HomeContainer = styled.div`
  position:relative;
  width:100%;
  height:100vh;
  font-family:${fontSettings.fontFamily};
  color:white;
`

const HomeInner = styled.div`
  background-image: url(${engineeringBackground});
  background-attachment: fixed;
  height:100vh;
  background-size: cover;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); 
    z-index: 1; 
  }
`

const TopHeader = styled.p`
  font-weight:500;
  line-height:5rem;
  font-size:2.8rem;
  z-index:2;
  margin: 0 0 1.6rem 0;
`

const Address = styled.p`
  font-size:2.1rem;
  z-index:2;
  color:${colors.whiteWithOpacity}
`

const TypeWriterContainer = styled.div`
  font-size: 6rem;
  z-index:2;
  height:6rem;
  font-weight:600
`


const Home = () => {
  return (
    <HomeContainer id="Home">
      <HomeInner>
        <TopHeader>Welcome</TopHeader>
        <TypeWriterContainer>
          <Typewriter 
            words={specialities}
            typeSpeed={70}
            loop={0}
          />
        </TypeWriterContainer>
        <Address>based on Khroub,Constantine</Address>
        <Button 
          color={colors.primaryColor}
          width="14.5rem"
          height="5.1rem"
          filledBackground={false}
          hoverBackground={colors.primaryColor}
          borderWidth="2px"
        >Hire Me</Button>
      </HomeInner>
      <Chevron/>
    </HomeContainer>
  )
}

export default Home

// TODO 1: delete the reps in z-index for topheader,address and typewriter
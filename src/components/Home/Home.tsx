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
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-attachment: fixed;
  height:100vh;
  background-size: cover;
  align-items:center;
  background-image: url(${engineeringBackground});

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
  font-size:2.8rem;
  line-height:5rem;
  font-weight:500;
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
    // <HomeContainer id="Home">
    //   <HomeInner>
    //     <TopHeader>Welcome</TopHeader>
    //     <TypeWriterContainer>
    //       <Typewriter 
    //         words={specialities}
    //         typeSpeed={70}
    //         loop={0}
    //       />
    //     </TypeWriterContainer>
    //     <Address>based on Khroub,Constantine</Address>
    //     <Button 
    //       color={colors.primaryColor}
    //       width="14.5rem"
    //       height="5.1rem"
    //       filledBackground={false}
    //       hoverBackground={colors.primaryColor}
    //       borderWidth="2px"
    //     >Hire Me</Button>
    //   </HomeInner>
    //   <Chevron/>
    // </HomeContainer>
    <div id="Home" className='relative w-full h-screen text-white'
      style={{
        fontFamily:fontSettings.fontFamily
      }}
    >
      <div className='flex flex-col justify-center items-center font-bold bg-fixed h-screen bg-cover before:content-[""] before:absolute before:top-0 before:left:0 before:w-full before:h-full before:bg-[rgb(0,0,0,0.7)] before:z-1'
        style={{
          backgroundImage:`url(${engineeringBackground})`
        }}
      >
        <p className='text-[2.8rem] font-bold leading-[5rem] z-2 m-0 mb-[1.6rem]'>
          Welcome
        </p>
        <div className='text-[6rem] z-2 h-[6rem] font-bold'>
          <Typewriter 
            words={specialities}
            typeSpeed={70}
            loop={0}
          />
        </div>
        <p className='text-[2.1rem] z-2 my-[2.1rem] font-medium'
          style={{
            color:colors.whiteWithOpacity
          }}
        >based on Khroub,Constantine</p>
        <Button 
          color={colors.primaryColor}
          width="14.5rem"
          height="5.1rem"
          filledBackground={false}
          hoverBackground={colors.primaryColor}
          borderWidth="2px"
        >Hire Me</Button>
      </div>
      <Chevron/>
    </div>
  )
}

export default Home

// TODO 1: delete the reps in z-index for topheader,address and typewriter
import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { fontSettings,specialities,colors} from '../../constants/constants'
import engineeringBackground from '../../assets/pexels-olly-3817858.jpg'
import Button from '../Button/Button'
import Chevron from '../Chevron/Chevron'

const Home = () => {
  return (
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
        <div className='text-[6rem] mb-[1.6rem] z-2 h-[6rem] font-bold'>
          <Typewriter 
            words={specialities}
            typeSpeed={70}
            loop={0}
          />
        </div>
        <p className='text-[2.1rem] z-2 my-[2.4rem] font-medium'
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
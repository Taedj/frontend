import React from 'react'
import styled from 'styled-components'
import engineeringBackground from '../../assets/pexels-olly-3817858.jpg'


const HomeContainer = styled.div`
  position:relative;
  width:100%;
  height:100vh
`

const HomeInner = styled.div`
  background-image: url(${engineeringBackground});
  height:100vh;
  background-size: cover;

  &::after {
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

const Home = () => {
  return (
    <HomeContainer>
      <HomeInner></HomeInner>
    </HomeContainer>
  )
}

export default Home
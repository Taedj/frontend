import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../BackgroundText/BackgroundText'
import { colors,fontSettings } from '../../constants/constants'

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundLessDarkColor};
`


const Potfolio = () => {
  return (
    <MainContainer>
      <BackgroundText backgroundText='PORTFOLIO' innerText='My Work'/>
    </MainContainer>
  )
}

export default Potfolio
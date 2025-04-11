import React from 'react'
import styled from 'styled-components'
import { colors,fontSettings } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import AddressBox from './AddressBox'

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundLessDarkColor};
  padding:7.2rem 4.8rem;
  color:white;
`

const EmailFormContainer = styled.div`

`


const Contact = () => {
  return (
    <MainContainer>
      <BackgroundText backgroundText='CONTACT' innerText='Get in Touch'/>
      <AddressBox/>
    </MainContainer>
  )
}

export default Contact
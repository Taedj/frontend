import React from 'react'
import styled from 'styled-components'
import { colors,fontSettings } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import AddressBox from './AddressBox'
import EmailForm from './EmailForm'

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundLessDarkColor};
  padding:7.2rem 4.8rem;
  color:white;
`

const BodyContainer = styled.div`
  display:flex;
  width:100%;
`

const AddressBoxContainer = styled.div`
  flex:1;
`

const EmailFormContainer = styled.div`
  flex:4;
`


const Contact = () => {
  return (
    <MainContainer>
      <BackgroundText backgroundText='CONTACT' innerText='Get in Touch'/>
      <BodyContainer>
        <AddressBoxContainer>
          <AddressBox/>
        </AddressBoxContainer>
        <EmailFormContainer>
          <EmailForm/>
        </EmailFormContainer>
      </BodyContainer>
    </MainContainer>
  )
}

export default Contact
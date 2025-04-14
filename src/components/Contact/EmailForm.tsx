import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'
import Button from '../Button/Button'

const MainContainer = styled.div`

`

const FormHeader = styled.h1`
  margin:0;
  margin-bottom:2rem;
`
const HorizontalContainer = styled.div`
  display:flex;
  width:100%;
`
const Input = styled.input`
  background-color:${colors.backgroundDarkColor};
  border-radius:5px;
  padding:1.5rem;
  font-size:1.6rem;
  margin:1rem;
  border:none;
  color:white;
`
const NameInput = styled(Input)`
  flex:1;
`
const EmailInput = styled(Input)`
  flex:1;
  margin-right:0;
`
const MessageInput = styled(Input)`
  width:100%;
`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
`

const EmailForm = () => {
  return (
    <MainContainer>
      <FormHeader>SEND US A NOTE</FormHeader>
      <HorizontalContainer>
        <NameInput placeholder="Name"/>
        <EmailInput placeholder="Email"/>
      </HorizontalContainer>
      <MessageInput placeholder="Tell us more about your needs....."/>
      <ButtonContainer>
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          outline={false}
        >Send Message</Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default EmailForm
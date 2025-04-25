import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'
import Button from '../Button/Button'

const MainContainer = styled.div`
  padding:0 4.8rem;
`

const FormHeader = styled.h1`
  margin:0;
  margin-bottom:1rem;
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
  margin-left:0;
`
const EmailInput = styled(Input)`
  flex:1;
  margin-right:0;
`
const MessageInput = styled.textarea`
  background-color:${colors.backgroundDarkColor};
  border-radius:5px;
  padding:1.5rem;
  font-size:1.6rem;
  margin:0;
  border:none;
  color:white;
  width:100%;
  height:14.8rem;
`

const ButtonContainer = styled.div`
  margin-top:2.4rem;
  display:flex;
  justify-content:center;
`

const FormContainer = styled.div``

const EmailForm = () => {
  return (
    <MainContainer>
      <FormHeader>SEND US A NOTE</FormHeader>
      <FormContainer>
        <HorizontalContainer>
          <NameInput placeholder="Name"/>
          <EmailInput placeholder="Email"/>
        </HorizontalContainer>
        <MessageInput placeholder="Tell us more about your needs....."/>
      </FormContainer>
      <ButtonContainer>
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground="rgb(27, 170, 128)"
          outline={false}
        >Send Message</Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default EmailForm
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
    // <MainContainer>
    //   <FormHeader>SEND US A NOTE</FormHeader>
    //   <FormContainer>
    //     <HorizontalContainer>
    //       <NameInput placeholder="Name"/>
    //       <EmailInput placeholder="Email"/>
    //     </HorizontalContainer>
    //     <MessageInput placeholder="Tell us more about your needs....."/>
    //   </FormContainer>
    //   <ButtonContainer>
    //     <Button
    //       color="white"
    //       height="5.4rem"
    //       width="20.5rem"
    //       backGroundColor={colors.primaryColor}
    //       hoverBackground="rgb(27, 170, 128)"
    //       outline={false}
    //     >Send Message</Button>
    //   </ButtonContainer>
    // </MainContainer>
    <div className='py-0 px-[4.8rem]'>
      <h1 className='m-0 mb-[1rem] text-[2.1rem]'>SEND US A NOTE</h1>
      <div>
        <div className='flex w-full'>
          <input type="text" 
            className='flex-1 ml-0 rounded-[5px] p-[1.5rem] text-[1.6rem] m-[1rem] border-0 text-white' 
            style={{backgroundColor:colors.backgroundDarkColor}} />
          <input type="text" 
            className='flex-1 mr-0 rounded-[5px] p-[1.5rem] text-[1.6rem] m-[1rem] border-0 text-white' 
            style={{backgroundColor:colors.backgroundDarkColor}} />
        </div>
        <textarea 
          className='rounded-[5px] p-[1.5rem] text-[1.6rem] m-0 border-0 text-white w-full h-[14.8rem]' 
          placeholder='Tell us more about your needs....'
          style={{backgroundColor:colors.backgroundDarkColor}}/>
      </div>
      <div className='flex justify-center mt-[2.4rem]'>
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground="rgb(27, 170, 128)"
          outline={false}
        >Send Message</Button>
      </div>
    </div>
  )
}

export default EmailForm
import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { colors } from '../../constants/constants'

const VerticalListMainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:4.8rem;
  margin-left:2.4rem;
`

const List = styled.ul`
    list-style:none;
    margin-bottom:1.6rem;
    width:39rem;

    li:last-child {
      border:none
    }
`

const ListItem = styled.li`
    border-bottom : 1px solid ${colors.borderColor};
    padding:1.2rem 0;
`

const CVButton = styled(Button)`
  border:none !important;
`


const VerticalList = () => {
  return (
    <VerticalListMainContainer>
      <List>
        <ListItem>Name: Simone Olivia</ListItem>
        <ListItem>Email: chat@simone.com</ListItem>
        <ListItem>Age: 28</ListItem>
        <ListItem>From: Los Angeles, California</ListItem>
      </List>
      <CVButton
          color="white"
          width="19.5rem"
          height="5rem"
          backGroundColor={colors.primaryColor}
          outline={false}
        >Download CV</CVButton>    
    </VerticalListMainContainer>
  )
}

export default VerticalList
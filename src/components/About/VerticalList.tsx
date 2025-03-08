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

const ColorChanger = styled.span`
  color: ${(props) => props.color}
`

const BoldText = styled.span`
  font-weight:600;
`


const VerticalList = () => {
  return (
    <VerticalListMainContainer>
      <List>
        <ListItem><BoldText>Name:</BoldText> Simone Olivia</ListItem>
        <ListItem><BoldText>Email:</BoldText> <ColorChanger color={colors.primaryColor}>chat@simone.com</ColorChanger></ListItem>
        <ListItem><BoldText>Age:</BoldText> 28</ListItem>
        <ListItem><BoldText>From:</BoldText> Los Angeles, California</ListItem>
      </List>
      <Button
          color="white"
          width="19.5rem"
          height="5rem"
          backGroundColor={colors.primaryColor}
          outline={false}
        >Download CV</Button>    
    </VerticalListMainContainer>
  )
}

export default VerticalList
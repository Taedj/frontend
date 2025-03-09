import React from 'react'
import styled from 'styled-components'
import { fontSettings,colors } from '../../constants/constants'
import { MdOutlineWeb } from "react-icons/md";
import { FaQuidditch } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import {IconType} from 'react-icons';


const BoxContainer = styled.div`
  font-size:2rem;
  display:flex;
  margin-bottom:4.8rem;
`
const Logo = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex:0 0 7rem;
  height:7rem;
  background-color:${colors.backgroundDarkColor};
  border-radius:5px;
  margin-right:2rem;
`

const BodyContainer = styled.div`

`

const Title = styled.h1`
  margin:0;
  margin-bottom:1rem;
  color:white;
  font-size:2rem;
  text-align:left;
`

const Body = styled.p`
  line-height:2.9rem;
  color:${colors.backgroundLessTextDarkColor};
  front-size:1.6rem;
  margin:0;
`

interface Props {
  title:string,
  children:string,
  category:string
}

const ServiceBox = ({title,children,category}:Props) => {

  const categories = {
    'ux/ui':<FaQuidditch size={40} color={colors.primaryColor}/>,
    'web design':<MdOutlineWeb size={40} color={colors.primaryColor}/>,
    'mechanical engineering':<MdEngineering size={40} color={colors.primaryColor}/>,
    'teaching':<GiTeacher size={40} color={colors.primaryColor}/>
  }

  return (
    <BoxContainer>
      <Logo>
        {categories[category]}
      </Logo>
      <BodyContainer>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </BodyContainer>
    </BoxContainer>
  )
}

export default ServiceBox
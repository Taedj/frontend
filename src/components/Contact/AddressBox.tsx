import React from 'react'
import styled from 'styled-components'
import { FaPhoneAlt,FaFax  } from "react-icons/fa";
import { IoMdMail  } from "react-icons/io";
import { colors } from '../../constants/constants';
import {FbIcon,TwIcon,GwIcon,GmIcon} from '../SideBar/SideBar'


const AddressContainer = styled.div`
`

const AddressLinesContainer = styled.div`
    margin-bottom:2.4rem;
`

const AddressTitle = styled.h1`
    font-size:2.1rem;
    font-weight:500;
    margin:0;
    margin-bottom:1.6rem;
`

const AddressLine = styled.p`
    color:${colors.backgroundLessTextDarkColor};
    font-size:1.6rem;
    font-weight:400;
    line-height:2.88rem;
`

const IconContainer = styled.span`
    margin-right:0.8rem;
`

const InfosContainer = styled.div`
    margin-bottom:2.4rem;
`

const InfoContainer = styled.div`
    color:${colors.backgroundLessTextDarkColor};
    display:flex;
    font-size:1.6rem;
    font-weight:400;
    line-height:2.88rem;
`

const SocialMediasList = styled.ul`
    width:14rem;
    display:flex;
    justify-content:space-between;
    list-style:none;
    padding:0;
`

const SocialMediaItem = styled.li`

`



const AddressBox = () => {
  return (
    <AddressContainer>
        <AddressTitle>ADDRESS</AddressTitle>
        <AddressLinesContainer>
            <AddressLine>4th Floor, Plot No.22,</AddressLine>
            <AddressLine>145 Murphy Canyon Rd.</AddressLine>
            <AddressLine>San Diego CA 2028</AddressLine>
        </AddressLinesContainer>
        <InfosContainer>
            <InfoContainer>
                <IconContainer><FaPhoneAlt size={14} color={colors.primaryColor}/></IconContainer>
                <InfoContainer>(060) 444 434 444</InfoContainer>
            </InfoContainer>
            <InfoContainer>
                <IconContainer><FaFax size={14} color={colors.primaryColor}/></IconContainer>
                <InfoContainer>(060) 555 545 555</InfoContainer>
            </InfoContainer>
            <InfoContainer>
                <IconContainer><IoMdMail size={14} color={colors.primaryColor}/></IconContainer>
                <InfoContainer>chat@simone.com</InfoContainer>
            </InfoContainer>
        </InfosContainer>
        <AddressTitle>FOLLOW ME</AddressTitle>
        <SocialMediasList>
          <SocialMediaItem>
            <FbIcon size={14} />
          </SocialMediaItem>
          <SocialMediaItem>
            <TwIcon size={14} />
          </SocialMediaItem>
          <SocialMediaItem>
            <GwIcon size={14} />
          </SocialMediaItem>
          <SocialMediaItem>
            <GmIcon size={14} />
          </SocialMediaItem>
        </SocialMediasList>
    </AddressContainer>
  )
}

export default AddressBox
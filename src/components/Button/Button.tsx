import React, { ReactNode } from 'react'
import styled from 'styled-components';
import { fontSettings } from '../../constants/constants';
import Chevron from '../Chevron/Chevron';

interface Props {
  color:string;
  backGroundColor:string|null;
  filledBackground:boolean;
  height:string;
  width:string;
  hoverBackground:string|null;
  children:ReactNode
}


const Button = (
  {
    color,
    height,
    width,
    backGroundColor=null,
    filledBackground=true,
    hoverBackground=null}:Props) => {
  const CustomizedButton = styled.button`
    font-family:${fontSettings.fontFamily};
    color:${color};
    background-color:${backGroundColor};
    ${(!filledBackground?"background:none;":"")}
    height:${height};
    width:${width};
    border-radius:25px;
    font-size:1.6rem;
    font-weight:600;
    border: 1px solid ${color};
    z-index:2;
    &:hover {
      ${hoverBackground && `background-color:${hoverBackground};`}
      color:white;
      transition:background-color 0.5s;
    }
  `;
  console.log(hoverBackground);
  return (
    <>
      <CustomizedButton>Hire Me</CustomizedButton>
      <Chevron/>
    </>
  )
}

export default Button
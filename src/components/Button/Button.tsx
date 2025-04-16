import { ReactNode } from 'react'
import styled from 'styled-components';
import { fontSettings } from '../../constants/constants';

interface Props {
  color:string;
  backGroundColor?:string|null;
  filledBackground?:boolean;
  height:string;
  width:string;
  hoverBackground?:string|null;
  outline?:boolean;
  borderWidth?:string;
  children:ReactNode
}


const Button = (
  {
    color,
    height,
    width,
    backGroundColor=null,
    filledBackground=true,
    hoverBackground=null,
    outline=true,
    borderWidth='1px',
    children}:Props) => {
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
    border: ${(outline)? `${borderWidth} solid ${color}`:"none"};
    z-index:2;
    &:hover {
      ${hoverBackground && `background-color:${hoverBackground};`}
      color:white;
      transition:background-color 0.5s;
    }
  `;
  return (
    <>
      <CustomizedButton>{children}</CustomizedButton>
    </>
  )
}

export default Button
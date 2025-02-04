import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { colors,fontSettings } from '../../constants/constants';


interface Props {
  backgroundText:string,
  innerText:string;
}

const BackgroundTextContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  position:relative;
  display:flex;
  flex-orientation:column;
  padding:0;
  margin:0;
  margin-bottom:4.8rem;
  justify-content:center;
  align-item:center;
  text-align:center;
`

const OuterText = styled.h2`
  margin:0;
  color: ${colors.backgroundTextDarkColor};
  font-size:13.2rem;
  opacity:0.1; 
  
`

const UnderLine = styled.span`
  width:8rem;
  height:3px;
  background-color:${colors.primaryColor};
  line-height:5.4rem;
  display:block;
  margin-left:31.5rem;
  margin-right:31.5rem;
`

const InnerText = styled.p`
  position:absolute;
  align-self:center;
  font-size:3.6rem;
  display:flex;
  flex-direction:column;
`

const BackgroundText = ({backgroundText,innerText}:Props) => {
  return (
    <BackgroundTextContainer>
      <OuterText>{backgroundText}</OuterText>
      <InnerText>
        {innerText}
        <UnderLine/>
      </InnerText>
    </BackgroundTextContainer>
  )
}

export default BackgroundText
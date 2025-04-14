import React from 'react'
import styled from 'styled-components'
import { colors,fontSettings } from '../../constants/constants'

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  display:flex;
  justify-content:space-between;
  background-color:${colors.backgroundDarkColor};
  color:${colors.backgroundLessTextDarkColor};
  padding:6.6rem 4.8rem;
  font-size:1.6rem;
  font-weight:550;
`

const ColorChanger = styled.span`
  color:${colors.primaryColor};
`

const CopyWrightContainer = styled.div`

`

const PolicyAndDisclaimerContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  & span {
    padding:0 1.6rem;
  }
`

const Footer = () => {
  return (
    <MainContainer>
      <CopyWrightContainer>Copyright © 2025 <ColorChanger>Zitouni</ColorChanger>. All Rights Reserved.</CopyWrightContainer>
      <PolicyAndDisclaimerContainer>
        <span>Terms & Policy</span>
        <span>Disclaimer</span>
      </PolicyAndDisclaimerContainer>
    </MainContainer>
  )
}

export default Footer
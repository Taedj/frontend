import {useState} from 'react'
import styled from 'styled-components'
import { FaFacebook,FaTwitter,FaGithub, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {colors,dimensions,fontSettings,sections} from '../../constants/constants'
import tidjani_photo from '../../assets/tidjani_photo.jpg'
import { FaT } from 'react-icons/fa6';

const NavBar = styled.div`
  font-family: ${fontSettings.fontFamily};
  color: ${colors.whiteWithOpacity};
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundVeryDarkColor};
  width: ${dimensions.sideBarWidth};
  height: 100vh;
  // padding:1.6rem;
  position:fixed;
  z-index:2;
`

const ImageHeader = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 18rem;
  height:18rem;
  background-image: url(${tidjani_photo});
  background-size: cover;
  border-radius: 50%; 
  border: 5px solid ${colors.backgroundLessDarkColor};
  margin-top:2.4rem;
`

const Sections = styled.ul`
  display:flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  font-size: 1.6rem;
  padding:0;
  font-weight:400;
`

const SectionItem = styled.li`
  padding:1rem;

  &:nth-child(1){
    color: ${colors.primaryColor}
  };

  &:hover {
    color: ${colors.primaryColor};
    transition: color 0.3s;
  }
`

const SocialMedias = styled.ul`
  padding:0 5rem;
  display:flex;
  list-style-type: none;
  justify-content: space-between;
  padding:0;
  margin:0;
  margin-bottom:2.4rem;
  line-height: 1rem;
`

const SocialMediasItem = styled.li`
  margin:0 1rem;
`

export const FbIcon = styled(FaFacebook)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.fbColor};
  }
`
export const TwIcon = styled(FaTwitter)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.twColor};
  }
`
export const GwIcon = styled(FaGithub)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.ghColor};
  }
`
export const GmIcon = styled(SiGmail)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.gmColor};
  }
`


const SideBar = () => {
  return (
    <>
      <NavBar>
        <ImageHeader>
          <ImageContainer/>
          <h1>Zitouni Tidjani</h1>
        </ImageHeader>
        <Sections>
          {sections.map(section => (
            <SectionItem key={section}>{section}</SectionItem>
          ))}
        </Sections>
        <SocialMedias>
          <SocialMediasItem>
            <FbIcon size={14} />
          </SocialMediasItem>
          <SocialMediasItem>
            <TwIcon size={14} />
          </SocialMediasItem>
          <SocialMediasItem>
            <GwIcon size={14} />
          </SocialMediasItem>
          <SocialMediasItem>
            <GmIcon size={14} />
          </SocialMediasItem>
        </SocialMedias>
      </NavBar>
    </>
  )
}

export default SideBar
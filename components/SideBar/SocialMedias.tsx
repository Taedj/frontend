import { FaFacebook, FaGithub, FaLinkedin, FaResearchgate, FaTwitter, FaUniversity } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import styled from 'styled-components';
import { colors, socialMediasLinks } from '../../constants/constants';

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
export const LiIcon = styled(FaLinkedin)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.liColor};
  }
`

export const UiIcon = styled(FaUniversity)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.uColor};
  }
`

export const RgIcon = styled(FaResearchgate)`
  color: ${colors.whiteWithOpacity};

  &:hover {
    color: ${colors.rgColor};
  }
`

export const GsIcon = styled(FaGoogleScholar)`
  color : ${colors.whiteWithOpacity};
  &:hover {
    color:${colors.gsColor};
  }
`

const SocialMedias = ({className=''}) => {
  return (
    <ul className={'flex justify-between p-0 m-0 mb-[2.4rem] list-none' + ' ' + className}>
        <li className="mx-[1rem]">
          <a href={socialMediasLinks.facebook}>
            <FbIcon size={14} />
          </a>
        </li>
        <li className="mx-[1rem]">
          <a href={socialMediasLinks.linkedin}>
            <LiIcon size={14} />
          </a>
        </li>
        <li className="mx-[1rem]">
          <a href={socialMediasLinks.researchGate}>
            <RgIcon size={14} />
          </a>
        </li>
        <li className="mx-[1rem]">
          <a href={socialMediasLinks.googleScholar}>
            <GsIcon size={14} />
          </a>
        </li>
        <li className="mx-[1rem]">
          <a href={socialMediasLinks.personalUnivPage}>
            <UiIcon size={14} />
          </a>
        </li>
    </ul>
  )
}

export default SocialMedias
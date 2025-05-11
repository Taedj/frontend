import React from 'react'
import styled from 'styled-components'
import { FaFacebook,FaTwitter,FaGithub, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { colors } from '../../constants/constants'

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

const SocialMedias = ({className=''}) => {
  return (
    <ul className={'flex justify-between p-0 m-0 mb-[2.4rem] list-none' + ' ' + className}>
        <li className="mx-[1rem]">
        <FbIcon size={14} />
        </li>
        <li className="mx-[1rem]">
        <TwIcon size={14} />
        </li>
        <li className="mx-[1rem]">
        <GwIcon size={14} />
        </li>
        <li className="mx-[1rem]">
        <GmIcon size={14} />
        </li>
    </ul>
  )
}

export default SocialMedias
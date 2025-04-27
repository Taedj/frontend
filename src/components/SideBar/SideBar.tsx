import {useState} from 'react'
import styled from 'styled-components'
import { FaFacebook,FaTwitter,FaGithub, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {colors,dimensions,fontSettings,sections} from '../../constants/constants'
import tidjani_photo from '../../assets/tidjani_photo.jpg'
import { FaT } from 'react-icons/fa6';


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
  const [HoveredIndex,setHoveredIndex] = useState(0);
  return (
    <>
      <div id="Home" className='flex flex-col justify-between items-center text-white h-screen fixed z-2'
        style={{
          fontFamily:fontSettings.fontFamily,
          backgroundColor:colors.backgroundVeryDarkColor,
          color:colors.whiteWithOpacity,
          width:dimensions.sideBarWidth
        }}
        >
        <div className='flex flex-col items-center'>
          <div className='w-[18rem] h-[18rem] bg-cover rounded-full border-8 mt-[2.4rem]'
            style={
              {
                backgroundImage: `url(${tidjani_photo})`,
                border:`8px solid ${colors.backgroundLessDarkColor}`
              }
            }
          >
          </div>
          <h1 className='text-[2.1rem] font-semibold leading-[2.5rem]'>Zitouni Tidjani</h1>
        </div>
        <ul className='flex flex-col items-center list-none text-[1.6rem] leading-[2.4rem] p-0 font-semiboldfont-semibold'>
          {sections.map((section,index) => (
            <li key={section} className='p-[1rem]'
              style={{
                transition:'color 0.3s',
                color:(HoveredIndex === index || index === 0)? colors.primaryColor:'white'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <a href={`#${section}`}className='text-inherit no-underline'>
                {section}
              </a>
            </li>
          ))}
        </ul>
        <ul className='flex justify-between p-0 m-0 mb-[2.4rem] list-none'>
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
      </div>
    </>
  )
}

export default SideBar
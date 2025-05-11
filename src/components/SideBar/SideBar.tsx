import {useState} from 'react'
import styled from 'styled-components'

import {colors,dimensions,fontSettings,sections} from '../../constants/constants'
import tidjani_photo from '../../assets/tidjani_photo.jpg'
import { FaT } from 'react-icons/fa6';
import SocialMedias from './SocialMedias'




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
          <div className='w-[18rem] h-[18rem] mb-[1.2rem] bg-cover rounded-full border-8 mt-[2.4rem]'
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
        <ul className='flex flex-col items-center list-none text-[1.8rem] leading-[2.4rem] p-0 font-semiboldfont-semibold'>
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
                {section.replaceAll('-',' ')}
              </a>
            </li>
          ))}
        </ul>
        <SocialMedias/>
      </div>
    </>
  )
}

export default SideBar
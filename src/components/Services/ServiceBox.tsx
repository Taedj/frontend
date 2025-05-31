import React from 'react'
import { fontSettings,colors } from '../../constants/constants'
import { MdOutlineWeb } from "react-icons/md";
import { FaQuidditch } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import {IconType} from 'react-icons';


interface Props {
  title: string,
  category: 'UX/UI design' | 'Mechanical Engineering' | 'Teaching',
  children: string,
}

const ServiceBox = ({title,category,children}:Props) => {

  const categories = {
    'UX/UI design':<FaQuidditch size={40} color={colors.primaryColor}/>,
    'Mechanical Engineering':<MdEngineering size={40} color={colors.primaryColor}/>,
    'Teaching':<GiTeacher size={40} color={colors.primaryColor}/>
  } as const;
  console.log(title,category);
  return (
    <div className='flex mb-[4.8rem] text-[2rem]'>
      <div className='flex flex-[0_0_7rem] justify-center items-center h-[7rem] rounded-[8px] mr-[2rem]' style={{backgroundColor:colors.backgroundDarkColor}}>
        {categories[category]}
      </div>
      <div>
        <h2 className='!m-0 !mb-4 font-semibold text-white text-[2.2rem] text-left'>
          {title}
        </h2>
        <p className='leading-[2.9rem] text-[1.6rem] m-0' style={{color:colors.backgroundLessTextDarkColor}}>{children}</p>
      </div>
    </div>
  )
}

export default ServiceBox

// TODO 1: check why the style for h1 not working unless i using ! (important)
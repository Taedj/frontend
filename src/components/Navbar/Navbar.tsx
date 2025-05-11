import React from 'react'
import { colors, fontSettings } from '../../constants/constants'
import SocialMedias from '../SideBar/SocialMedias'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between align-center items-center text-white px-[1.6rem] h-[6.6rem] font-semibold' style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.navbarColor,
    }}>
        <h1 className='text-[2.1rem]'>Zitouni Tidjani</h1>
        <div className='flex items-center'>
            <SocialMedias className="!mb-0" />
            <MdMenu size={30} className='ml-[1.6rem]'/>
        </div>
    </div>
  )
}

export default Navbar
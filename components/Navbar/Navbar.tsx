import React, { useState } from 'react'
import { colors, fontSettings,sections } from '../../constants/constants'
import SocialMedias from '../SideBar/SocialMedias'
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import useConfig from '../../hooks/useConfig';


const Navbar = () => {
  const {data:config} = useConfig();
  const [menuClicked,setMenuClicked] = useState(false);
  const [HoveredIndex,setHoveredIndex] = useState(0);
  return (
    <>
        <div style={{fontFamily:fontSettings.fontFamily}}>
            <div className='flex justify-between align-center items-center text-white px-[1.6rem] h-[6.6rem] font-semibold' style={{
                backgroundColor:colors.navbarColor,
            }}>
                <h1 className='text-[2.1rem]'>{config?.fullname}</h1>
                <div className='flex items-center'>
                    <SocialMedias className="!mb-0" />
                    {(!menuClicked) && <MdMenu size={30} className='ml-[1.6rem]' onClick={() => setMenuClicked(!menuClicked)}/>}
                    {(menuClicked) && <RxCross1 size={30} className='ml-[1.6rem]' onClick={() => setMenuClicked(!menuClicked)}/>}
                </div>
            </div>
            {menuClicked && 
                <div className='absolute w-full z-50'>
                    <ul className='text-white text-[1.6rem]'style={{backgroundColor:colors.menuColor}}>
                        {
                            sections.map((section,index) => <li key={index} className='p-[0.8rem] border-b' style={{
                            transition:'color 0.3s',
                            color:(HoveredIndex === index || index === 0)? colors.primaryColor:'white',
                            borderColor:colors.menuItemBorderColor
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(0)}
                            >
                                <a href={`#${section}`}className='text-inherit no-underline'>{section.replaceAll('-',' ')}</a>
                                
                            </li>)
                        }   
                    </ul>
                </div>
            }
        </div>

    </>
  )
}

export default Navbar
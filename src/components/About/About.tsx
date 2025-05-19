import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'
import HorizontalList from './HorizontalList'
import { colors ,fontSettings} from '../../constants/constants'

interface Props {
  fontSize:string;
  isMobile:boolean;
  breakpoint:boolean;
}

const About = ({fontSize,isMobile,breakpoint}:Props) => {
  return (
    <>
      <div id='About-Me' className='py-[7.2rem] px-[4.8rem] text-[1.6rem] text-white' style={{backgroundColor:colors.backgroundDarkColor,fontFamily:fontSettings.fontFamily}}>
        <div className='max-w-[1224px] mx-auto w-full'>
          <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More' fontSize={fontSize}/>
          <div className='flex w-full' style={{flexDirection:breakpoint?'column':'row'}}>
            <div className='flex-3 min-w-0'>
              <Paragraph/>
            </div>
            <div className='flex-& min-w-0'>
              <VerticalList/>
            </div>
          </div>
          <HorizontalList isMobile={breakpoint} breakpoint={breakpoint}/>
        </div>
      </div>
    </>
  )
}

export default About
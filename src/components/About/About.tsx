import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'
import HorizontalList from './HorizontalList'
import { colors ,fontSettings} from '../../constants/constants'

interface Props {
  fontSize:string;
}

const About = ({fontSize}:Props) => {
  return (
    <>
      <div id='About-Me' className='py-[7.2rem] px-[4.8rem] text-[1.6rem] text-white' style={{backgroundColor:colors.backgroundDarkColor,fontFamily:fontSettings.fontFamily}}>
        <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More' fontSize={fontSize}/>
        <div className='flex w-full'>
          <div className='flex-3 min-w-0'>
            <Paragraph/>
          </div>
          <div className='flex-2 min-w-0'>
            <VerticalList/>
          </div>
        </div>
        <HorizontalList/>
      </div>
    </>
  )
}

export default About
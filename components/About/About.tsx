import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'
import HorizontalList from './HorizontalList'
import { colors ,fontSettings} from '../../constants/constants'
import useConfig from '../../hooks/useConfig'



const About = () => {
  const {data:config} = useConfig();
  console.log('config from about',config);
  return (
    <>
      <div id='About-Me' className='py-[7.2rem] px-[4.8rem] text-[1.6rem] text-white' style={{backgroundColor:colors.backgroundDarkColor,fontFamily:fontSettings.fontFamily}}>
        <div className='max-w-[1224px] mx-auto w-full'>
          <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
          <div className='flex flex-col md:flex-row w-full' >
            <div className='flex-3 min-w-0'>
              <Paragraph fullname={config?.fullname} description={config?.about_description}/>
            </div>
            <div className='flex-& min-w-0'>
              <VerticalList/>
            </div>
          </div>
          <HorizontalList/>
        </div>
      </div>
    </>
  )
}

export default About
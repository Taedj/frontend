import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox from './ServiceBox'
import { colors,fontSettings } from '../../constants/constants'
import { Service } from '../../App'

interface Props {
  fontSize: string;
  isMobile: boolean;
  services:Service[];
}

const getClassName = (isMobile:boolean) => {
  if (!isMobile) {
    return 'grid grid-cols-2 p-0 px-[4.8rem] gap-8 mt-[4.8rem]';
  }
  return 'flex flex-col p-0 px-[4.8rem] gap-8 mt-[4.8rem]';
}

const Services = ({ fontSize, isMobile,services }: Props) => {
  return (
    <div id="What-I-Do" className='p-0 py-[7.2rem]' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundLessDarkColor}}>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText="SERVICES" innerText="What I Do?" fontSize={fontSize}/>
        <div className={getClassName(isMobile)}>
          {
            services.map(
              service => <ServiceBox 
                            title={service.title}
                            category={service.category}
                          >{service.description}
                          </ServiceBox>)
          }
        </div>
      </div>
    </div>
  )
}

export default Services
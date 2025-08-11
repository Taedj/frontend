import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox from './ServiceBox'
import { colors,fontSettings } from '../../constants/constants'
import { Service } from '../../app/page'
import { Category } from './ServiceBox'

interface Props {
  services:Service[];
}

const Services = ({ services }: Props) => {
  return (
    <div id="What-I-Do" className='p-0 py-[7.2rem]' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundLessDarkColor}}>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText="SERVICES" innerText="What I Do?"/>
        <div className='md:grid md:grid-cols-2 max-md:flex max-md:flex-col px-[4.8rem] gap-8 mt-[4.8rem]'>
          {
            services.map(
              service => <ServiceBox 
                            key={service.title}
                            title={service.title}
                            category={service.category as Category} 
                          >{service.description}
                          </ServiceBox>)
          }
        </div>
      </div>
    </div>
  )
}

export default Services
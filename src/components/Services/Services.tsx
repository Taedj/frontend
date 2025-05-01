import React from 'react'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox from './ServiceBox'
import { colors,fontSettings } from '../../constants/constants'

const Services = () => {
  return (
    <div id="What-I-Do" className='p-0 py-[7.2rem]' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundLessDarkColor}}>
      <BackgroundText backgroundText="SERVICES" innerText="What I Do?"/>
      <div className='grid grid-cols-2 p-0 px-[4.8rem] gap-8 mt-[4.8rem]'>
          <ServiceBox title="Web Design" category="web design">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox>
          <ServiceBox  title="UI/UX Design" category="ux/ui">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox >
          <ServiceBox  title="Mechanical Engineering" category="mechanical engineering">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox>
          <ServiceBox  title="Teaching" category="teaching">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</ServiceBox> 
      </div>
    </div>
  )
}

export default Services
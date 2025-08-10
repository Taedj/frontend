import React from 'react'
import { colors } from '../../constants/constants'

interface Props {
  year:string;
  title:string;
  subTitle:string;
  children:string;
}

const SummaryBox = ({year,title,subTitle,children}:Props) => {
  return (
    <div className='p-[2.4rem] m-[2.4rem] rounded' style={{backgroundColor:colors.summaryBoxBackgroundColor}}>
      <span className='h-[2.4rem] w-[10.2rem] text-[1.4rem] rounded py-[0.5rem] px-[1rem]' style={{backgroundColor:colors.primaryColor}}>
        {year}
      </span>
      <h1 className='text-[2.1rem] !mt-[2rem] !mb-[0.8rem]'>
        {title}
      </h1>
      <h2 className='text-[1.6rem] leading-[2.9rem] mb-[1.6rem]' style={{color:colors.primaryColor}}>
        {subTitle}
      </h2>
      <p className='text-[1.6rem] leading-[2.9rem]' style={{color:colors.backgroundLessTextDarkColor}}>
        {children}
      </p>
    </div>
  )
}

export default SummaryBox
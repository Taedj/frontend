import React from 'react'
import { fontSettings } from '../../constants/constants';
import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
    progress:number;
    color:string;
    title:string;
    breakpoint:boolean;
}

const getMainContainerClassName = (breakpoint:boolean) => {
  return (breakpoint) ? 'text-semibold mb-[2.4rem]':'text-semibold'
}

const ProgressRow = ({progress,color,title,breakpoint}:Props) => {
  return (
    <div className={getMainContainerClassName(breakpoint)} style={{fontFamily:fontSettings.fontFamily}}>
      <div className='flex justify-between mb-[0.8rem] text-[1.6rem] font-semibold'>
        <h2 className='m-0 mb-[0.8rem] text-[1.6rem]'>{title}</h2>
        <span>{progress + '%'}</span>
      </div>
      <ProgressBar completed={progress} bgColor={color} height="8px" isLabelVisible={false} baseBgColor="black"/>
    </div>
  )
}

export default ProgressRow
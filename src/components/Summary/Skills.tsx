import React from 'react'
import ProgressRow from './ProgressRow'
import { colors } from '../../constants/constants'

interface Props {
  breakpoint:boolean
}

const getClassName = (breakpoint:boolean) => {
  return (breakpoint) ? 'flex flex-col':'grid grid-cols-2 gap-[4rem]'
}

const Skills = ({breakpoint}:Props) => {
  return (
    <div>
      <h1 className='!my-[2.4rem] !mx-0 text-[2.4rem] font-semibold'>
        My Skills
      </h1>
      <div className={getClassName(breakpoint)}>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor} breakpoint={breakpoint}/>
      </div>
    </div>
  )
}

export default Skills
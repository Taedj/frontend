import React from 'react'
import ProgressRow from './ProgressRow'
import { colors } from '../../constants/constants'


const Skills = () => {
  return (
    <div>
      <h1 className='!my-[2.4rem] !mx-0 text-[2.4rem] font-semibold'>
        My Skills
      </h1>
      <div className='grid grid-cols-2 gap-[4rem]'>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
        <ProgressRow progress={60} title="Web Design" color={colors.primaryColor}/>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'
import Button from '../Button/Button'
import { colors } from '../../constants/constants'


const VerticalList = () => {
  return (
    <div className='flex flex-col justify-center align-center py-0 px-[1.2rem] mt-[4.8rem]'>
      <ul className='list-none mb-[1.6rem] w-[26.5rem] pl-[2.4rem]'>
        <li className='text-[1.6rem] font-medium py-[1.2rem] px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Name:</span> Zitouni Tidjani
        </li>
        <li className='text-[1.6rem] font-medium py-[1.2rem] px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Email:</span> <span style={{color:colors.primaryColor}}>tidjani@gmail.com</span>
        </li>
        <li className='text-[1.6rem] font-medium py-[1.2rem] px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Age:</span> 32
        </li>
        <li className='text-[1.6rem] font-medium py-[1.2rem] px-0 border-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>From:</span> Khroub,Contantine
        </li>
      </ul>
      <Button
          color="white"
          width="19.5rem"
          height="5rem"
          backGroundColor={colors.primaryColor}
          outline={false}
        >Download CV</Button>  
    </div>
  )
}

export default VerticalList
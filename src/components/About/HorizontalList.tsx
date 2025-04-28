import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'


const getCell = (last:boolean,value:string,description:string) => {
  return  <li className={`flex-1 py-[2rem] px-[1.2rem] ${last?'border-r-0':''}`} style={{borderRight:`1px solid ${colors.borderColor}`}}>
            <div className='flex flex-col align-center text-center'>
              <div className='text-[4.8rem] text-center' style={{color:colors.backgroundLessTextDarkColor}}>{value}</div>
              <div style={{color:colors.cellDescriptionColor}}>{description}</div>
            </div>
          </li>
}

const value_description = [
  ['10+','Years Experience'],
  ['250+','Happy Clients'],
  ['650+','Projects Done'],
  ['38','Get Awards']
]

const HorizontalList = () => {
  return (
    <div className='mt-[4.8rem]'>
      <ul className='flex my-0 mx-[4.8rem] text-[1.6rem] list-none' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
        {getCell(false,value_description[0][0],value_description[0][1])}
        {getCell(false,value_description[1][0],value_description[1][1])}
        {getCell(false,value_description[2][0],value_description[2][1])}
        {getCell(true,value_description[3][0],value_description[3][1])}
      </ul>
    </div>
  )
}

export default HorizontalList
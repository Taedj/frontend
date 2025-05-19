import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'


const getCell = (
  last:boolean,
  value:string,
  description:string,
  borderTop:boolean=false,
  borderLeft:boolean=false,
  borderBottom:boolean=false,
  borderRight:boolean=false,
) => {
  return  <li className={`flex-1 py-[2rem] px-[1.2rem]`} style={{
    borderTop:borderTop ? `1px solid ${colors.borderColor}` : 'none',
    borderLeft:borderLeft ? `1px solid ${colors.borderColor}` : 'none',
    borderBottom:borderBottom ? `1px solid ${colors.borderColor}` : 'none',
    borderRight:borderRight ? `1px solid ${colors.borderColor}` : 'none',
  }}>
            <div className='flex flex-col align-center text-center'>
              <div className='text-[4.8rem] text-center' style={{color:colors.backgroundLessTextDarkColor}}>{value}</div>
              <div style={{color:colors.cellDescriptionColor}}>{description}</div>
            </div>
          </li>
}

const getClassName = (isMobile:boolean) => {
  if (isMobile) {
    return 'grid grid-cols-2 my-0 mx-[4.8rem] text-[1.6rem] list-none';
  }
  return 'flex my-0 mx-[4.8rem] text-[1.6rem] list-none';
}

const value_description = [
  ['10+','Years Experience'],
  ['250+','Happy Clients'],
  ['650+','Projects Done'],
  ['38','Get Awards']
]

interface Props {
  isMobile:boolean;
  breakpoint:boolean;
}

const HorizontalList = ({isMobile,breakpoint}:Props) => {
  return (
    <div className='mt-[4.8rem]'>
      <ul className={getClassName(isMobile)}>
        {getCell(
          false,
          value_description[0][0],
          value_description[0][1],
          false,false,breakpoint,true)
        }
        {getCell(
          false,
          value_description[1][0],
          value_description[1][1],
          false,breakpoint,breakpoint,!breakpoint)
        }
        {getCell(
          false,
          value_description[2][0],
          value_description[2][1],
          breakpoint,false,false,true)
        }
        {getCell(
          true,
          value_description[3][0],
          value_description[3][1],
          breakpoint,breakpoint,false,false)
        
        }
      </ul>
    </div>
  )
}

export default HorizontalList
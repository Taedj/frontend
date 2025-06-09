import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'
import { useConfig } from '../../context/ConfigContext'
import { useWorks } from '../../context/WorksContext'
import { Config } from '../../App'

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

const getClassName = (breakpoint:boolean) => {
  if (breakpoint) {
    return 'grid grid-cols-2 my-0 mx-[4.8rem] text-[1.6rem] list-none';
  }
  return 'flex my-0 mx-[4.8rem] text-[1.6rem] list-none';
}

const getValueDescription = (config:Config) => {
  const works = useWorks();
  const work_length = (works.length>0)?works.length:0;
  return [
    [config.experience_years,'Years Experience'],
    [config.awards_count,'Happy Clients'],
    [work_length,'Projects Done'],
    [config.awards_count,'Get Awards']
  ]
}


interface Props {
  breakpoint:boolean;
}

const HorizontalList = ({breakpoint}:Props) => {
  const config = useConfig();
  const value_description = getValueDescription(config);
  return (
    <div className='mt-[4.8rem]'>
      <ul className={getClassName(breakpoint)}>
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
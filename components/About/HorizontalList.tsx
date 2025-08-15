import { colors, dimensions } from '../../constants/constants'
import useConfig, { Config } from '../../hooks/useConfig'
import useWorks from '../../hooks/useWorks'
import clientLogger from '../../lib/clientLogger'


const getCell = (value:string|number,description:string) => {
  return <div className='flex flex-col align-center text-center'>
            <div className='text-7xl text-center text-bg-text-less-dark'>{value}</div>
            <div className='text-cell-description'>{description}</div>
          </div>
}


const getValueDescription = (config:Config|undefined):[string|number,string][] => {
  const {data:works} = useWorks();
  let work_length = 0;
  if (works) {
    work_length = works.length;
  }
  if (config)
    return [
      [config.experience_years,'Years Experience'],
      [config.awards_count,'Happy Clients'],
      [work_length,'Projects Done'],
      [config.awards_count,'Get Awards']
    ]
  return [
    ['','Years Experience'],
    ['','Happy Clients'],
    [work_length,'Projects Done'],
    ['','Get Awards']
  ]
}

const borderStyles = {
  'top':'border-t border-solid border-about-border',
  'left':'border-l border-solid border-about-border',
  'bottom':'border-b border-solid border-about-border',
  'right':'border-r border-solid border-about-border',
  'md:top':'md:border-t md:border-solid md:border-about-border',
  'md:left':'md:border-l md:border-solid md:border-about-border',
  'md:bottom':'md:border-b md:border-solid md:border-about-border',
  'md:right':'md:border-r md:border-solid md:border-about-border',
  'max-md:top':'max-md:border-t max-md:border-solid max-md:border-about-border',
  'max-md:left':'max-md:border-l max-md:border-solid max-md:border-about-border',
  'max-md:bottom':'max-md:border-b max-md:border-solid max-md:border-about-border',
  'max-md:right':'max-md:border-r max-md:border-solid max-md:border-about-border',
}


const HorizontalList = () => {
  const {breakpoint} = dimensions;
  const {data:config} = useConfig();
  const value_description = getValueDescription(config);
  return (
    <div className='mt-19'>
      <ul className='max-md:grid max-md:grid-cols-2 md:flex my-0 mx-19 text-2xl list-none'>
        <li className={`flex-1 py-8 px-5 ${borderStyles['max-md:bottom']} ${borderStyles.right}`}>
          {getCell(
            value_description[0][0],
            value_description[0][1],
          )}
        </li>
        <li className={`flex-1 py-8 px-5 ${borderStyles['max-md:left']} ${borderStyles['max-md:bottom']} ${borderStyles['md:right']}`}>
          {getCell(
            value_description[1][0],
            value_description[1][1], 
          )}
        </li>
        <li className={`flex-1 py-8 px-5 ${borderStyles['max-md:top']} ${borderStyles.right}`}>
          {getCell(
            value_description[2][0],
            value_description[2][1],
          )}
        </li>
        <li className={`flex-1 py-8 px-5 ${borderStyles['max-md:top']} ${borderStyles['max-md:left']}`}>
          {getCell(
            value_description[3][0],
            value_description[3][1],
          )}
        </li>
      </ul>
    </div>
  )
}

export default HorizontalList
import { colors } from '../../constants/constants'
import useConfig from '../../hooks/useConfig'
import Button from '../Button/Button'


const VerticalList = () => {
  const {data:config} = useConfig();
  return (
    <div className='flex flex-col justify-center align-center py-0 px-5 mt-19 font-semibold'>
      <ul className='list-none mb-5 w-[26.5rem]'>
        <li className='text-2xl py-5 px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Name:</span> {config?.fullname}
        </li>
        <li className='text-2xl py-5 px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Email:</span> <span style={{color:colors.primaryColor}}>{config?.email}</span>
        </li>
        <li className='text-2xl py-5 px-0' style={{borderBottom:`1px solid ${colors.borderColor}`}}>
          <span className='font-bold'>Age:</span> {config?.age}
        </li>
        <li className='text-2xl py-5 px-0 border-0'>
          <span className='font-bold'>From:</span> Khroub,Contantine
        </li>
      </ul>
      <Button
          color="white"
          width="19.5rem"
          height="5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground={colors.primaryColor}
          outline={false}
        >Download CV</Button>  
    </div>
  )
}

export default VerticalList
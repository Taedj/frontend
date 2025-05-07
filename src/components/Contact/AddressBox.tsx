import { FaPhoneAlt,FaFax  } from "react-icons/fa";
import { IoMdMail  } from "react-icons/io";
import { colors } from '../../constants/constants';
import {FbIcon,TwIcon,GwIcon,GmIcon} from '../SideBar/SideBar'

const AddressBox = () => {
  return (
    <div>
      <h1 className='text-[2.1rem] font-medium m-0 mb-[1.6rem]'>ADDRESS</h1>
      <div className='mb-[2.4rem]'>
        <p className='text-[1.6rem] font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
          4th Floor, Plot No.22,
        </p>
        <p className='text-[1.6rem] font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
            145 Murphy Canyon Rd.
        </p>
        <p className='text-[1.6rem] font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
            San Diego CA 2028
        </p>
      </div>
      <div className='mb-[2.4rem]'>
        <div className='flex text-[1.6rem] font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-[2.4rem] mt-[0.8rem]'><FaPhoneAlt size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>(060) 444 434 444</div>
        </div>
        <div className='flex text-[1.6rem] font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-[2.4rem] mt-[0.8rem]'><FaFax size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>(060) 555 545 555</div>
        </div>
        <div className='flex text-[1.6rem] font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-[2.4rem] mt-[0.8rem]'><IoMdMail size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>chat@simone.com</div>
        </div>
      </div>
      <h1 className='text-[2.1rem] font-semibold m-0 mb-[1.6rem]'>FOLLOW ME</h1>
      <ul className='flex justify-between list-none w-[14rem] p-0'>
          <li><FbIcon size={14} /></li>
          <li><TwIcon size={14} /></li>
          <li><GwIcon size={14} /></li>
          <li><GmIcon size={14} /></li>
      </ul>
    </div>
  )
}

export default AddressBox
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { colors } from '../../constants/constants';
import useConfig from "../../hooks/useConfig";
import SocialMedias from "../SideBar/SocialMedias";

const AddressBox = () => {
  const {data:config} = useConfig();
  const addressList = (config?.address)?config.address.split(','):[];
  return (
    <div>
      <h1 className='text-4xl font-medium m-0 mb-6'>ADDRESS</h1>
      <div className='mb-10'>
        <p className='text-2xl font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
          {addressList[0]}
        </p>
        <p className='text-2xl font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
            {addressList[1]}
        </p>
        <p className='text-2xl font-normal leading-[2.88rem]' 
          style={{color:colors.backgroundLessTextDarkColor}}>
            {addressList[2]}
        </p>
      </div>
      <div className='mb-10'>
        <div className='flex text-2xl font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-10 mt-3'><FaPhoneAlt size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>{config?.phone1}</div>
        </div>
        <div className='flex text-2xl font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-10 mt-3'><FaPhoneAlt size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>{config?.phone2}</div>
        </div>
        <div className='flex text-2xl font-medium leading-[2.88rem]'
          style={{
            color:colors.backgroundLessTextDarkColor
          }}
        >
          <span className='mr-10 mt-3'><IoMdMail size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0' style={{color:colors.backgroundLessTextDarkColor}}>{config?.email}</div>
        </div>
      </div>
      <h1 className='text-4xl font-semibold m-0 mb-5'>FOLLOW ME</h1>
      <ul className='flex justify-between list-none w-[14rem] p-0'>
          <SocialMedias/>
      </ul>
    </div>
  )
}

export default AddressBox
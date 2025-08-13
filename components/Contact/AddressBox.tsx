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
        <p className='text-2xl font-normal leading-12 text-bg-text-less-dark'>
          {addressList[0]}
        </p>
        <p className='text-2xl font-normal leading-12 text-bg-text-less-dark'>
            {addressList[1]}
        </p>
        <p className='text-2xl font-normal leading-12 text-bg-text-less-dark'>
            {addressList[2]}
        </p>
      </div>
      <div className='mb-10'>
        <div className='flex text-2xl font-medium leading-12 text-bg-text-less-dark'>
          <span className='mr-10 mt-3'><FaPhoneAlt size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0'>{config?.phone1}</div>
        </div>
        <div className='flex text-2xl font-medium leading-12 text-bg-text-less-dark'>
          <span className='mr-10 mt-3'><FaPhoneAlt size={14} color={colors.primaryColor}/></span>
          <div className='flex justify-between list-none p-0 text-bg-text-less-dark'>{config?.phone2}</div>
        </div>
        <div className='flex text-2xl font-medium leading-12 text-bg-text-less-dark'>
          <span className='mr-10 mt-3 text-primary'><IoMdMail size={14}/></span>
          <div className='flex justify-between list-none p-0 text-bg-text-less-dark'>{config?.email}</div>
        </div>
      </div>
      <h1 className='text-4xl font-semibold m-0 mb-5'>FOLLOW ME</h1>
      <ul className='flex justify-between list-none w-56 p-0'>
          <SocialMedias/>
      </ul>
    </div>
  )
}

export default AddressBox
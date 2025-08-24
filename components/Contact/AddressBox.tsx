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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium m-0 mb-6">ADDRESS</h1>
      <div className="mb-8 sm:mb-10">
        {addressList.map((line, idx) => (
          <p key={idx} className="text-base sm:text-lg md:text-2xl font-normal leading-relaxed text-bg-text-less-dark">
            {line}
          </p>
        ))}
      </div>

      <div className="mb-8 sm:mb-10 space-y-4">
        <div className="flex items-start text-base sm:text-lg md:text-2xl font-medium text-bg-text-less-dark">
          <span className="mr-4 sm:mr-6 mt-1"><FaPhoneAlt size={16} color={colors.primaryColor}/></span>
          <div>{config?.phone1}</div>
        </div>
        <div className="flex items-start text-base sm:text-lg md:text-2xl font-medium text-bg-text-less-dark">
          <span className="mr-4 sm:mr-6 mt-1"><FaPhoneAlt size={16} color={colors.primaryColor}/></span>
          <div>{config?.phone2}</div>
        </div>
        <div className="flex items-start text-base sm:text-lg md:text-2xl font-medium text-bg-text-less-dark">
          <span className="mr-4 sm:mr-6 mt-1 text-primary"><IoMdMail size={16}/></span>
          <div>{config?.email}</div>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold m-0 mb-5">FOLLOW ME</h1>
      <ul className="flex gap-4 sm:gap-6 list-none flex-wrap p-0">
        <SocialMedias />
      </ul>
    </div>
  )
}

export default AddressBox
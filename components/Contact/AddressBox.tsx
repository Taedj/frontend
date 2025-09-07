import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { colors } from "../../constants/constants";
import useConfig from "../../hooks/useConfig";
import SocialMedias from "../SideBar/SocialMedias";

const AddressBox = () => {
  const { data: config } = useConfig();
  const addressList = config?.address ? config.address.split(",") : [];

  return (
    <div className="w-full max-md:text-center">
      <h1 className="text-3xl sm:text-4xl font-medium m-0 mb-6">ADDRESS</h1>
      <div className="mb-6 space-y-2">
        {addressList.map((line, idx) => (
          <p
            key={idx}
            className="text-2xl font-normal leading-7 sm:leading-12 text-bg-text-less-dark"
          >
            {line}
          </p>
        ))}
      </div>
      <div className="mb-12 space-y-3">
        <div className="flex max-md:justify-center items-start text-2xl font-medium leading-7 sm:leading-12 text-bg-text-less-dark">
          <FaPhoneAlt
            size={16}
            color={colors.primaryColor}
            className="mr-3 mt-1"
          />
          <span>{config?.phone1}</span>
        </div>
        {config?.phone2 && (
          <div className="flex max-md:justify-center items-start text-2xl font-medium leading-7 sm:leading-12 text-bg-text-less-dark">
            <FaPhoneAlt
              size={16}
              color={colors.primaryColor}
              className="mr-3 mt-1"
            />
            <span>{config?.phone2}</span>
          </div>
        )}
        <div className="flex max-md:justify-center items-start text-2xl font-medium leading-7 sm:leading-12 text-bg-text-less-dark">
          <IoMdMail
            size={16}
            color={colors.primaryColor}
            className="mr-3 mt-1"
          />
          <span>{config?.email}</span>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold m-0 mb-5">FOLLOW ME</h1>
      <div className="flex flex-wrap max-md:justify-center gap-4 sm:gap-6 w-full p-0">
        <SocialMedias />
      </div>
    </div>
  );
};

export default AddressBox;

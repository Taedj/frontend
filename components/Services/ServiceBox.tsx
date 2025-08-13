import { FaQuidditch } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { colors } from '../../constants/constants';


export type Category = 'UX/UI design' | 'Mechanical Engineering' | 'Teaching';

interface Props {
  title: string,
  category: Category,
  children: string,
}

const ServiceBox = ({title,category,children}:Props) => {

  const categories = {
    'UX/UI design':<FaQuidditch size={40} color={colors.primaryColor}/>,
    'Mechanical Engineering':<MdEngineering size={40} color={colors.primaryColor}/>,
    'Teaching':<GiTeacher size={40} color={colors.primaryColor}/>
  } as const;
  return (
    <div className='flex mb-20 text-3xl'>
      <div className='flex flex-[0_0_7rem] justify-center items-center h-28 rounded-[8px] mr-8 bg-bg-dark'>
        {categories[category]}
      </div>
      <div>
        <h2 className='!m-0 !mb-4 font-semibold text-white text-4xl text-left'>
          {title}
        </h2>
        <p className='leading-12 text-2xl m-0 text-bg-text-less-dark'>{children}</p>
      </div>
    </div>
  )
}

export default ServiceBox

// TODO 1: check why the style for h1 not working unless i using ! (important)
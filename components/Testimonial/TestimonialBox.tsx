import { AiFillStar } from "react-icons/ai";
import { colors } from '../../constants/constants';

interface Props {
  image:string;
  title:string;
  subTitle:string;
  testomonial:string;
}

const TestimonialBox = ({image,title,subTitle,testomonial}:Props) => {
  return (
      <div className="rounded-[5px] text-base sm:text-lg md:text-2xl leading-relaxed m-2 sm:m-4 p-4 sm:p-10 md:p-16 lg:p-20 text-white bg-bg-very-dark">
        <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
          <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-27 md:w-27">
            <img className="w-full h-full object-cover rounded-full" src={image} />
          </div>
          <div className="ml-4 sm:ml-6">
            <h1 className="text-base sm:text-xl md:text-2xl font-semibold m-0">{title}</h1>
            <h2 className="text-sm sm:text-lg md:text-2xl m-0 text-bg-text-dark">{subTitle}</h2>
          </div>
        </div>
        <p className="font-semibold mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
          {testomonial}
        </p>
        <div className="flex">
          <AiFillStar color={colors.starColor}/>
          <AiFillStar color={colors.starColor}/>
          <AiFillStar color={colors.starColor}/>
          <AiFillStar color={colors.starColor}/>
          <AiFillStar color="white"/>
        </div>
      </div>
  )
}

export default TestimonialBox
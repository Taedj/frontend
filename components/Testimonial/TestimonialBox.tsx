import { AiFillStar } from "react-icons/ai";
import { colors } from '../../constants/constants';

interface Props {
  image: string;
  title: string;
  subTitle: string;
  testomonial: string;
}

const TestimonialBox = ({ image, title, subTitle, testomonial }: Props) => {
  return (
    <div
      className="
        rounded-[10px] 
        text-2xl sm:text-3xl    /* 👈 stops scaling after md */
        leading-relaxed 
        m-3 sm:m-6 
        p-6 sm:p-10 md:p-16 lg:p-20 
        text-white 
        bg-bg-very-dark
        min-h-[360px] sm:min-h-0
      "
    >
      {/* Avatar + Titles */}
      <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
        <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36">
          <img
            className="w-full h-full object-cover rounded-full"
            src={image}
          />
        </div>
        <div className="ml-5 sm:ml-7">
          <h1 className="text-3xl sm:text-4xl  font-semibold m-0">
            {title}
          </h1>
          <h2 className="text-xl sm:text-2xl  m-0 text-bg-text-dark">
            {subTitle}
          </h2>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="font-medium mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl ">
        {testomonial}
      </p>

      {/* Stars */}
      <div className="flex text-3xl sm:text-4xl md:text-5xl"> 
        <AiFillStar color={colors.starColor} />
        <AiFillStar color={colors.starColor} />
        <AiFillStar color={colors.starColor} />
        <AiFillStar color={colors.starColor} />
        <AiFillStar color="white" />
      </div>
    </div>
  );
};

export default TestimonialBox;

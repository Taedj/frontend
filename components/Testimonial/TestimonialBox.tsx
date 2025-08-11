import { AiFillStar } from "react-icons/ai";
import { colors, fontSettings } from '../../constants/constants';

interface Props {
  image:string;
  title:string;
  subTitle:string;
  testomonial:string;
}

const TestimonialBox = ({image,title,subTitle,testomonial}:Props) => {
  return (
    <div className='rounded-[5px] text-[1.6rem] leading-[2.88rem] m-[1rem] p-[4.8rem] text-white'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundVeryDarkColor,
      }}
    >
      <div className='flex mb-[2.4rem]'>
        <div className='h-[6.7rem] w-[6.7rem]'>
          <img className='w-full h-full object-cover rounded-full' src={image} />
        </div>
        <div className='ml-[1.6rem]'>
          <h1 className='text-[1.6rem] m-0'>{title}</h1>
          <h2 className='text-[1.6rem] m-0'style={{color:colors.backgroundTextDarkColor}}>{subTitle}</h2>
        </div>
      </div>
      <p className='font-semibold mb-[2.4rem]'>{testomonial}</p>
      <div className='flex'>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color={colors.starColor}/>
        <AiFillStar color='white'/>
      </div>
    </div>
  )
}

export default TestimonialBox
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
    <div className='rounded-[5px] text-2xl leading-12 m-4 p-20 text-white'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundVeryDarkColor,
      }}
    >
      <div className='flex mb-10'>
        <div className='h-27 w-27'>
          <img className='w-full h-full object-cover rounded-full' src={image} />
        </div>
        <div className='ml-6'>
          <h1 className='text-2xl m-0'>{title}</h1>
          <h2 className='text-2xl m-0'style={{color:colors.backgroundTextDarkColor}}>{subTitle}</h2>
        </div>
      </div>
      <p className='font-semibold mb-10'>{testomonial}</p>
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
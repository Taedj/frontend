import ProgressBar from "@ramonak/react-progress-bar";
import { fontSettings } from '../../constants/constants';

interface Props {
    progress:number;
    color:string;
    title:string;
}

const ProgressRow = ({progress,color,title}:Props) => {
  return (
    <div className='max-md:mb-[2.4rem] text-semibold' style={{fontFamily:fontSettings.fontFamily}}>
      <div className='flex justify-between mb-[0.8rem] text-[1.6rem] font-semibold'>
        <h2 className='m-0 mb-[0.8rem] text-[1.6rem]'>{title}</h2>
        <span>{progress + '%'}</span>
      </div>
      <ProgressBar completed={progress} bgColor={color} height="8px" isLabelVisible={false} baseBgColor="black"/>
    </div>
  )
}

export default ProgressRow
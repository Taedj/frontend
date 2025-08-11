import { colors } from '../../constants/constants';

interface Props {
  fullname?:string;
  description?:string;
}

const Paragraph = ({fullname,description}:Props) => {
  return (
    <div className='mt-[4.8rem] py-0 px-[1.2rem]'>
        <h1 className='text-[2.8rem] mb-[1.6rem] text-white font-semibold'>
            I'm <span className='text-left' style={{color:colors.primaryColor}}>{fullname}</span>
        </h1>
        <p className='text-justify mb-[1.6rem] leading-[2.8rem]' style={{color:colors.backgroundLessTextDarkColor}}>
            {description}
        </p>
    </div>

  )
}

export default Paragraph
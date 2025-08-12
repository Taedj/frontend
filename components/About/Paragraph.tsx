import { colors } from '../../constants/constants';

interface Props {
  fullname?:string;
  description?:string;
}

const Paragraph = ({fullname,description}:Props) => {
  return (
    <div className='mt-19 py-0 px-5'>
        <h1 className='text-5xl mb-6 text-white font-semibold'>
            I'm <span className='text-left' style={{color:colors.primaryColor}}>{fullname}</span>
        </h1>
        <p className='text-justify mb-6 leading-11' style={{color:colors.backgroundLessTextDarkColor}}>
            {description}
        </p>
    </div>

  )
}

export default Paragraph
import { colors } from '../../constants/constants';

interface Props {
  year:string;
  title:string;
  subTitle:string;
  children:string;
}

const SummaryBox = ({year,title,subTitle,children}:Props) => {
  return (
    <div className='p-10 m-10 rounded' style={{backgroundColor:colors.summaryBoxBackgroundColor}}>
      <span className='h-[2.4rem] w-[10.2rem] text-2xl rounded py-2 px-4' style={{backgroundColor:colors.primaryColor}}>
        {year}
      </span>
      <h1 className='text-4xl !mt-8 !mb-3'>
        {title}
      </h1>
      <h2 className='text-2xl leading-12 mb-6' style={{color:colors.primaryColor}}>
        {subTitle}
      </h2>
      <p className='text-2xl leading-12' style={{color:colors.backgroundLessTextDarkColor}}>
        {children}
      </p>
    </div>
  )
}

export default SummaryBox
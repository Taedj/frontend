import { colors } from '../../constants/constants';


interface Props {
  backgroundText:string,
  innerText:string;
  fontSize:string;
}

const BackgroundText = ({backgroundText,innerText,fontSize}:Props) => {
  return (
    <div className='relative flex flex-col p-0 m-0 justify-center align-center text-center text-white'>
        <h2 className='m-0 opacity-10' style={{color:colors.backgroundTextDarkColor,fontWeight:550,fontSize:fontSize}}>{backgroundText}</h2>
        <p className='absolute flex flex-col self-center text-[3.6rem] font-semibold'>
          {innerText}
          <span className='block mx-[31.5rem] w-[8rem] h-[3px] leading-[5.4rem]' style={{backgroundColor:colors.primaryColor}}></span>
        </p>
    </div>
  )
}

export default BackgroundText
import { ReactNode,useState } from 'react'
import { fontSettings } from '../../constants/constants';

interface Props {
  color:string;
  backGroundColor?:string;
  filledBackground?:boolean;
  height:string;
  width:string;
  hoverBackground?:string;
  outline?:boolean;
  borderWidth?:string;
  children:ReactNode
}

const Button = (
    {
      color,
      height,
      width,
      backGroundColor='',
      filledBackground=true,
      hoverBackground='',
      outline=true,
      borderWidth='1px',
      children
    }:Props) => {
    const [hover,setHover] = useState(false);
    const cssBackground = (!filledBackground)?"background:none;":"";
    const buttonCss = `flex justify-center items-center rounded-[25px] text-[1.6rem] font-semibold z-2 ${cssBackground} transition-colors duration-500`
  return (
    <button className={buttonCss}
        style={{
            fontFamily:fontSettings.fontFamily,
            color:hover?'white':color,
            height:height,
            width:width,
            border:`${(outline)? `${borderWidth} solid ${color}`:"none"}`,
            backgroundColor:hover? hoverBackground:backGroundColor,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  )
}


export default Button
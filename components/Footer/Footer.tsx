import { colors,fontSettings } from '../../constants/constants'

const getMainContainerClass = (isMobile:boolean) => {
  if (isMobile) return 'flex flex-col justify-between py-[6.6rem] px-[4.8rem] text-[1.6rem] ';
  return 'flex justify-between py-[6.6rem] px-[4.8rem] text-[1.6rem]';
}

const getLinkContainerClass = (isMobile:boolean) => {
  if (isMobile) return 'flex justify-center'; 
  return 'flex justify-end';
}

interface Props {
  isMobile:boolean;
}

const Footer = ({isMobile}:Props) => {
  return (
    <div 
      className={getMainContainerClass(isMobile)}
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundDarkColor,
        color:colors.backgroundLessTextDarkColor
      }}    
    >
      <div className={(isMobile)?'!mb-[1.6rem] text-center':''}>Copyright © 2025 <span style={{color:colors.primaryColor}}>Zitouni</span>. All Rights Reserved.</div>
      <div className={getLinkContainerClass(isMobile)}>
        <span className='py-0 px-[1.6rem]'>Terms & Policy</span>
        <span className='py-0 px-[1.6rem]'>Disclaimer</span>
      </div>
    </div>
  )
}

export default Footer
import { colors,fontSettings } from '../../constants/constants'


const Footer = () => {
  return (
    <div 
      className='flex justify-between py-[6.6rem] px-[4.8rem] text-[1.6rem]'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundDarkColor,
        color:colors.backgroundLessTextDarkColor
      }}    
    >
      <div>Copyright © 2025 <span style={{color:colors.primaryColor}}>Zitouni</span>. All Rights Reserved.</div>
      <div className='flex justify-end'>
        <span className='py-0 px-[1.6rem]'>Terms & Policy</span>
        <span className='py-0 px-[1.6rem]'>Disclaimer</span>
      </div>
    </div>
  )
}

export default Footer
import { colors, fontSettings } from '../../constants/constants'

const Footer = () => {
  return (
    <div 
      className='flex max-md:flex-col justify-between py-[6.6rem] px-[4.8rem] text-[1.6rem] '
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundDarkColor,
        color:colors.backgroundLessTextDarkColor
      }}    
    >
      <div className='max-md:!mb-[1.6rem] max-md:text-center'>Copyright © 2025 <span style={{color:colors.primaryColor}}>Zitouni</span>. All Rights Reserved.</div>
      <div className='flex max-md:justify-center md:justify-end'>
        <span className='py-0 px-[1.6rem]'>Terms & Policy</span>
        <span className='py-0 px-[1.6rem]'>Disclaimer</span>
      </div>
    </div>
  )
}

export default Footer
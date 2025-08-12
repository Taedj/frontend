import { colors, fontSettings } from '../../constants/constants'

const Footer = () => {
  return (
    <div 
      className='flex max-md:flex-col justify-between py-27 px-20 text-[1.6rem] '
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundDarkColor,
        color:colors.backgroundLessTextDarkColor
      }}    
    >
      <div className='max-md:!mb-6 max-md:text-center'>Copyright © 2025 <span style={{color:colors.primaryColor}}>Zitouni</span>. All Rights Reserved.</div>
      <div className='flex max-md:justify-center md:justify-end'>
        <span className='py-0 px-6'>Terms & Policy</span>
        <span className='py-0 px-6'>Disclaimer</span>
      </div>
    </div>
  )
}

export default Footer
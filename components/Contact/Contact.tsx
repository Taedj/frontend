import { colors,fontSettings } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import AddressBox from './AddressBox'
import EmailForm from './EmailForm'

interface Props {
  fontSize: string;
}

const Contact = ({ fontSize}: Props) => {
  return (
    <div id="Contact" className='py-[7.2rem] px-[4.8rem] text-white' 
      style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundLessDarkColor}}>
      <BackgroundText backgroundText='CONTACT' innerText='Get in Touch' fontSize={fontSize}/>
      <div className='max-w-[1224px] mx-auto w-full'>
        <div className='max-md:flex max-md:w-full'>
          <div className='max-md:flex-1'>
            <AddressBox/>
          </div>
          <div className='max-md:flex-4 md:flex md:justify-center md:mt-16'>
            <EmailForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
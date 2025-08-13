import { colors, fontSettings } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import AddressBox from './AddressBox'
import EmailForm from './EmailForm'

const Contact = () => {
  return (
    <div id="Contact" className='py-29 px-20 text-white bg-bg-less-dark'>
      <BackgroundText backgroundText='CONTACT' innerText='Get in Touch'/>
      <div className='max-w-[1224px] mx-auto w-full'>
        <div className='md:flex md:w-full'>
          <div className='maxmd:flex-1'>
            <AddressBox/>
          </div>
          <div className='md:flex-4 max-md:flex max-md:justify-center max-md:mt-16'>
            <EmailForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
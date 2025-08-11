import { colors } from '../../constants/constants'
import Button from '../Button/Button'

const EmailForm = () => {
  return (
    <div className='py-0 px-[4.8rem]'>
      <h1 className='m-0 mb-[1rem] text-[2.1rem]'>SEND US A NOTE</h1>
      <div>
        <div className='flex max-md:flex-col w-full'>
          <input type="text" 
            className='flex-1 md:mr-[1rem] md:mb-[1rem] ml-0 rounded-[5px] p-[1.5rem] text-[1.6rem] m-[1rem] border-0 text-white' 
            placeholder='Name'
            style={{backgroundColor:colors.backgroundDarkColor}} />
          <input type="text" 
            className='flex-1 md:ml-[1rem] mr-0 rounded-[5px] p-[1.5rem] text-[1.6rem] m-[1rem] border-0 text-white'
            placeholder='Email'
            style={{backgroundColor:colors.backgroundDarkColor}} />
        </div>
        <textarea 
          className='rounded-[5px] p-[1.5rem] text-[1.6rem] m-0 border-0 text-white w-full h-[14.8rem]' 
          placeholder='Tell us more about your needs....'
          style={{backgroundColor:colors.backgroundDarkColor}}/>
      </div>
      <div className='flex justify-center mt-[2.4rem]'>
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground="rgb(27, 170, 128)"
          outline={false}
        >Send Message</Button>
      </div>
    </div>
  )
}

export default EmailForm
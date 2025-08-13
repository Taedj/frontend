import { colors } from '../../constants/constants'
import Button from '../Button/Button'

const EmailForm = () => {
  return (
    <div className='py-0 px-20'>
      <h1 className='m-0 mb-4 text-4xl'>SEND US A NOTE</h1>
      <div>
        <div className='flex max-md:flex-col w-full'>
          <input type="text" 
            className='flex-1 md:mr-4 md:mb-4 ml-0 rounded-[5px] p-6 text-2xl m-4 border-0 text-white bg-bg-dark' 
            placeholder='Name'/>
          <input type="text" 
            className='flex-1 md:ml-4 mr-0 rounded-[5px] p-6 text-2xl m-4 border-0 text-white bg-bg-dark'
            placeholder='Email'/>
        </div>
        <textarea 
          className='rounded-[5px] p-6 text-2xl m-0 border-0 text-white w-full h-59 bg-bg-dark' 
          placeholder='Tell us more about your needs....'/>
      </div>
      <div className='flex justify-center mt-10'>
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
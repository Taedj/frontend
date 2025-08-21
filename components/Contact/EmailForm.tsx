import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { colors } from '../../constants/constants'
import useSendEmail from '../../hooks/useSendEmail';
import Button from '../Button/Button'

const EmailForm = () => {
  const schema = z.object({
    Name:z.string().min(2).max(100),
    Email:z.email(),
    Message:z.string().max(1000)
  })
  type FormData = z.infer<typeof schema>;
  const { mutate } = useSendEmail();

  const onSubmit = (data) => {
    mutate(data);
  }

  const {register,handleSubmit} = useForm<FormData>({resolver:zodResolver(schema)});
  return (
    <form className='py-0 px-20' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='m-0 mb-4 text-4xl'>SEND US A NOTE</h1>
      <div>
        <div className='flex max-md:flex-col w-full'>
          <input 
            {...register('Name')}
            type="text"
            className='flex-1 md:mr-4 md:mb-4 mx-0 mb-0 rounded-[5px] p-6 text-2xl m-4 border-0 text-white bg-bg-dark' 
            placeholder='Name'
            name='Name'
            required
          />
          <input 
            {...register('Email')}
            type="email" 
            className='flex-1 md:ml-4 mr-0 rounded-[5px] p-6 text-2xl my-4 border-0 text-white bg-bg-dark'
            placeholder='Email'
            name='Email'
            required
          />
        </div>
        <textarea 
          {...register('Message')}
          className='rounded-[5px] p-6 text-2xl m-0 border-0 text-white w-full h-59 bg-bg-dark' 
          name='Message'
          placeholder='Tell us more about your needs....'
        />
      </div>
      <div className='flex justify-center mt-10'>
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground={colors.hoverPrimaryColor}
          outline={false}
        >Send Message</Button>
      </div>
    </form>
  )
}

export default EmailForm
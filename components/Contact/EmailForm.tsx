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

  const {register,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)});
  return (
    <form className='py-0 px-20' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='m-0 mb-4 text-4xl'>SEND US A NOTE</h1>
      <div className='flex gap-4 flex-col'>
        <div className='flex max-md:flex-col w-full gap-4'>
          <div className='flex-1'>
            <input 
              {...register('Name')}
              type="text"
              className='rounded-[5px] p-6 text-2xl border-0 text-white bg-bg-dark w-full' 
              placeholder='Name'
              name='Name'
              required
            />
            {errors.Name &&(
              <p className='text-red-500 text-2xl my-2'>{errors.Name.type}</p>
            )}
          </div>
          <div className='flex-1'>
            <input 
              {...register('Email')}
              type="email" 
              className='rounded-[5px] p-6 text-2xl border-0 text-white bg-bg-dark w-full'
              placeholder='Email'
              name='Email'
              required
            />
            {errors.Email &&(
              <p className='text-red-500 text-2xl my-2'>{errors.Email.type}</p>
            )}
          </div>
        </div>
        <textarea 
          {...register('Message')}
          className='rounded-[5px] p-6 text-2xl m-0 border-0 text-white w-full h-59 bg-bg-dark' 
          name='Message'
          placeholder='Tell us more about your needs....'
        />
          {errors.Name &&(
            <p className='text-red-500 text-2xl my-2'>{errors.Message?.type}</p>
          )}
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
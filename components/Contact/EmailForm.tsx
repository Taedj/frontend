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
<form className="w-full max-w-lg md:max-w-xl lg:max-w-2xl px-4 sm:px-10 md:px-20" onSubmit={handleSubmit(onSubmit)}>
  <h1 className="m-0 mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold">SEND US A NOTE</h1>
  <div className="flex flex-col gap-4">
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1">
        <input
          {...register('Name')}
          type="text"
          className="rounded-[5px] p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-2xl border-0 text-white bg-bg-dark w-full"
          placeholder="Name"
          name="Name"
          required
        />
        {errors.Name && <p className="text-red-500 text-sm sm:text-base md:text-lg mt-2">{errors.Name.type}</p>}
      </div>
      <div className="flex-1">
        <input
          {...register('Email')}
          type="email"
          className="rounded-[5px] p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-2xl border-0 text-white bg-bg-dark w-full"
          placeholder="Email"
          name="Email"
          required
        />
        {errors.Email && <p className="text-red-500 text-sm sm:text-base md:text-lg mt-2">{errors.Email.type}</p>}
      </div>
    </div>

    <textarea
      {...register('Message')}
      className="rounded-[5px] p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-2xl m-0 border-0 text-white w-full h-40 sm:h-52 md:h-59 bg-bg-dark"
      name="Message"
      placeholder="Tell us more about your needs...."
    />
    {errors.Message && <p className="text-red-500 text-sm sm:text-base md:text-lg mt-2">{errors.Message.type}</p>}
  </div>

  <div className="flex justify-center mt-8 sm:mt-10">
    <Button
      color="white"
      height="4.5rem"
      width="16rem"
      backGroundColor={colors.primaryColor}
      hoverBackground={colors.hoverPrimaryColor}
      outline={false}
    >
      Send Message
    </Button>
  </div>
</form>
  )
}

export default EmailForm
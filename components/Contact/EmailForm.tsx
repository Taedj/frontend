import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { colors } from '../../constants/constants';
import useSendEmail from '../../hooks/useSendEmail';
import Button from '../Button/Button';

const EmailForm = () => {
  const schema = z.object({
    Name: z.string().min(2).max(100),
    Email: z.email(),
    Message: z.string().max(1000)
  });

  type FormData = z.infer<typeof schema>;
  const { mutate } = useSendEmail();

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  return (
    <form className="px-4 sm:px-6 md:px-0 py-0 w-full" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="m-0 mb-6 text-3xl sm:text-4xl">SEND US A NOTE</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1">
            <input
              {...register('Name')}
              type="text"
              className="rounded-md p-4 sm:p-6 text-lg sm:text-2xl border-0 text-white bg-bg-dark w-full outline-none"
              placeholder="Name"
              name="Name"
              required
            />
            {errors.Name && (
              <p className="text-red-500 text-sm sm:text-2xl mt-1">{errors.Name.type}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register('Email')}
              type="email"
              className="rounded-md p-4 sm:p-6 text-lg sm:text-2xl border-0 text-white bg-bg-dark w-full outline-none"
              placeholder="Email"
              name="Email"
              required
            />
            {errors.Email && (
              <p className="text-red-500 text-sm sm:text-2xl mt-1">{errors.Email.type}</p>
            )}
          </div>
        </div>
        <textarea
          {...register('Message')}
          className="rounded-md p-4 sm:p-6 text-lg sm:text-2xl border-0 text-white w-full h-48 sm:h-60 bg-bg-dark outline-none"
          name="Message"
          placeholder="Tell us more about your needs..."
        />
        {errors.Message && (
          <p className="text-red-500 text-sm sm:text-2xl mt-1">{errors.Message.type}</p>
        )}
      </div>
      <div className="flex justify-center mt-8 sm:mt-10">
        <Button
          color="white"
          height="5.4rem"
          width="20.5rem"
          backGroundColor={colors.primaryColor}
          hoverBackground={colors.hoverPrimaryColor}
          outline={false}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;

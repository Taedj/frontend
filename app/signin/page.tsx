'use client';
import React from 'react'
import Link from 'next/link';
import { redirect } from "next/navigation";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button/Button'
import { colors } from '../../constants/constants'
import useLogin from '../../hooks/useLogin';

const styles = {
  input:'bg-bg-dark text-bg-text-less-dark w-full py-5 px-6 border-none rounded-md text-2xl "transition-[border] duration-300 focus:outline-none',
  label:'block mb-4 font-medium text-2xl font-bold'
}

const schema = z.object({
  username:z.string().min(3),
  password:z.string()
})

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {mutate,isSuccess} = useLogin();

  const onSubmit = (data) => {
    mutate(data);
  }
  const {register,handleSubmit,formState:{errors}} = useForm<FormData>(
    {resolver:zodResolver(schema)}
  );
  if (isSuccess){
    redirect('/');
  }
  return (
    <div id="sign-in" className='m-0 p-0 flex justify-center items-center h-screen bg-bg-less-dark text-white'>
      <div className="auth-container rounded-xl w-full max-w-[400px] p-12">
          <h1 className='text-center mb-10 font-semibold text-primary text-5xl'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-8">
                  <label htmlFor="username" className={styles.label}>Username</label>
                  <input {...register('username')} type="text" id="username" placeholder="kiroutek" name="username" className={styles.input} />
                  {errors.username &&(
                    <p className='text-red-500 text-2xl my-2'>{errors.username.type}</p>
                  )}
              </div>
              <div className="form-group mb-8">
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <input {...register('password')} type="text" id="password" placeholder="********" name="password" className={styles.input} />
                  {errors.password &&(
                    <p className='text-red-500 text-2xl my-2'>{errors.password.type}</p>
                  )}
              </div>
              <div className='flex justify-center my-12'>
                <Button
                  color="white"
                  width="30rem"
                  height="5rem"
                  backGroundColor={colors.primaryColor}
                  hoverBackground={colors.hoverPrimaryColor}
                  outline={false}
                >Sign In</Button>
              </div>
          </form>
          <div className="switch-auth text-lg text-center">
              Don't have an account? <span className="text-primary"><Link href="/signup">Sign Up</Link></span>
          </div>
      </div>
    </div>
  )
}

export default Page
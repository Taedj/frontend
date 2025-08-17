'use client';
import React from 'react'
import Link from 'next/link';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button/Button'
import { colors } from '../../constants/constants'

const styles = {
  input:'bg-bg-dark text-bg-text-less-dark w-full py-5 px-6 border-none rounded-md text-2xl "transition-[border] duration-300 focus:outline-none',
  label:'block mb-4 font-medium text-2xl font-bold'
}

const schema = z.object({
  email:z.email(),
  password:z.string()
})

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {register,handleSubmit} = useForm<FormData>(
    {resolver:zodResolver(schema)}
  );
  return (
    <div id="sign-in" className='m-0 p-0 flex justify-center items-center h-screen bg-bg-less-dark text-white'>
      <div className="auth-container rounded-xl w-full max-w-[400px] p-12">
          <h1 className='text-center mb-10 font-semibold text-primary text-5xl'>Login</h1>
          <form onSubmit={handleSubmit(data => console.log(data))}>
              <div className="form-group mb-8">
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input {...register('email')} type="text" id="email" placeholder="bensouiciakram@gmail.com" name="email" className={styles.input} />
              </div>
              <div className="form-group mb-8">
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <input {...register('password')} type="text" id="password" placeholder="********" name="password" className={styles.input} />
              </div>
              <div className='flex justify-center my-12'>
                <Button
                  color="white"
                  width="30rem"
                  height="5rem"
                  backGroundColor={colors.primaryColor}
                  hoverBackground={colors.primaryColor}
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
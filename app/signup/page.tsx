'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button'
import { colors } from '../../constants/constants'
import useCreateUser from '../../hooks/useCreateUser';

const styles = {
  input:
    'bg-bg-dark text-bg-text-less-dark w-full py-3 px-4 md:py-5 md:px-6 border-none rounded-md text-base md:text-2xl transition-[border] duration-300 focus:outline-none',
  label:
    'block mb-2 md:mb-4 font-medium text-base md:text-2xl font-bold'
}

const schema = z.object({
  first_name:z.string().min(3).max(100),
  last_name:z.string().min(3).max(100),
  phone1: z.string(),
  age:z.string(),
  username:z.string(),
  email:z.string().email(),
  password:z.string(),
  re_password:z.string()
})

type FormData = z.infer<typeof schema>;

const Page = () => {
  const router = useRouter();
  const {mutate,isSuccess} = useCreateUser();
  const {register,handleSubmit,formState:{errors}} = useForm<FormData>({
    resolver:zodResolver(schema)
  });

  useEffect(() => {
    if (isSuccess) router.push('/signup/activation');
  }, [isSuccess, router]);

  return (
    <div id="sign-in" className="m-0 p-0 flex justify-center items-center min-h-screen bg-bg-less-dark text-white px-4">
      <div className="auth-container rounded-xl w-full max-w-[400px] md:max-w-[500px] p-6 md:p-12">
        <h1 className="text-center mb-6 md:mb-10 font-semibold text-primary text-3xl md:text-5xl">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit(user => mutate(user))}>
          {/* First Name */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="first-name" className={styles.label}>First Name</label>
            <input {...register('first_name')} type="text" id="first-name" placeholder="John" className={styles.input} />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.first_name?.type}</p>
          </div>

          {/* Last Name */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="last-name" className={styles.label}>Last Name</label>
            <input {...register('last_name')} type="text" id="last-name" placeholder="Doe" className={styles.input} />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.last_name?.type}</p>
          </div>

          {/* Age */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="age" className={styles.label}>Age</label>
            <input {...register('age')} type="text" id="age" placeholder="30" className={styles.input} />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.age?.type}</p>
          </div>

          {/* Phone */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <input {...register('phone1')} type="text" id="phone" placeholder="+1234567890" className={styles.input} />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.phone1?.type}</p>
          </div>

          {/* Username */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="username" className={styles.label}>Username</label>
            <input {...register('username')} type="text" id="username" placeholder="kiroutek" className={styles.input} required />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.username?.type}</p>
          </div>

          {/* Email */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="email" className={styles.label}>Email</label>
            <input {...register('email')} type="email" id="email" placeholder="john@example.com" className={styles.input} required />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.email?.type}</p>
          </div>

          {/* Password */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="password" className={styles.label}>Password</label>
            <input {...register('password')} type="password" id="password" placeholder="••••••••" className={styles.input} required />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.password?.type}</p>
          </div>

          {/* Confirm Password */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="re_password" className={styles.label}>Confirm Password</label>
            <input {...register('re_password')} type="password" id="re_password" placeholder="••••••••" className={styles.input} required />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">{errors.re_password?.type}</p>
          </div>

          {/* Button */}
          <div className="flex justify-center my-8 md:my-12">
            <Button
              color="white"
              width="100%"
              height="3.5rem"
              backGroundColor={colors.primaryColor}
              hoverBackground={colors.hoverPrimaryColor}
              outline={false}
            >
              Sign Up
            </Button>
          </div>
        </form>

        <div className="switch-auth text-sm md:text-lg text-center">
          Already have an account?{' '}
          <span className="text-primary"><Link href="/signin">Sign In</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Page
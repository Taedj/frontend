"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { colors } from "../../constants/constants";
import useCreateUser from "../../hooks/useCreateUser";
import Spinner from "../../components/Spinner/Spinner";

const styles = {
  input:
    "bg-bg-dark text-bg-text-less-dark w-full py-3 px-4 md:py-5 md:px-6 border-none rounded-md text-base md:text-2xl transition-[border] duration-300 focus:outline-none",
  label: "block mb-2 md:mb-4 font-medium text-base md:text-2xl font-bold",
};

const schema = z
  .object({
    first_name: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),
    last_name: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .regex(/^[a-zA-Z\s'-]+$/, "Last name contains invalid characters"),
    phone1: z.string().regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number"),
    age: z.coerce
      .number()
      .int("Age must be an integer")
      .min(13, "You must be at least 13 years old")
      .max(120, "Invalid age"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    email: z.string().email("Invalid email address").max(100),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password too long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });
type FormData = z.infer<typeof schema>;

const Page = () => {
  const router = useRouter();
  const { mutate, isSuccess, isPending, isError, error } = useCreateUser();
  console.log({ isError, error });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
  });

  const onSubmit = (user: FormData) => {
    mutate(user);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/signup/activation");
    }
  }, [isSuccess, router]);

  return (
    <div
      id="sign-in"
      className="m-0 p-0 flex justify-center items-center min-h-screen bg-bg-less-dark text-white px-4"
    >
      <div className="auth-container rounded-xl w-full max-w-[400px] md:max-w-[500px] p-6 md:p-12">
        <h1 className="text-center mb-6 md:mb-10 font-semibold text-primary text-3xl md:text-5xl">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="first-name" className={styles.label}>
              First Name
            </label>
            <input
              {...register("first_name")}
              type="text"
              id="first-name"
              placeholder="John"
              className={styles.input}
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.first_name?.message}
            </p>
          </div>

          {/* Last Name */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="last-name" className={styles.label}>
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              id="last-name"
              placeholder="Doe"
              className={styles.input}
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.last_name?.message}
            </p>
          </div>

          {/* Age */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="age" className={styles.label}>
              Age
            </label>
            <input
              {...register("age", { valueAsNumber: true })}
              type="text"
              id="age"
              placeholder="30"
              className={styles.input}
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.age?.message}
            </p>
          </div>

          {/* Phone */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              {...register("phone1")}
              type="text"
              id="phone"
              placeholder="+1234567890"
              className={styles.input}
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.phone1?.message}
            </p>
          </div>

          {/* Username */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              placeholder="kiroutek"
              className={styles.input}
              required
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.username?.message}
            </p>
          </div>

          {/* Email */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="john@example.com"
              className={styles.input}
              required
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="••••••••"
              className={styles.input}
              required
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.password?.message}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="re_password" className={styles.label}>
              Confirm Password
            </label>
            <input
              {...register("re_password")}
              type="password"
              id="re_password"
              placeholder="••••••••"
              className={styles.input}
              required
            />
            <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
              {errors.re_password?.message}
            </p>
          </div>
          <p className="text-red-500 text-sm md:text-2xl my-1 md:my-2">
            {error && error?.data && Object.values(error?.data)[0]}
          </p>
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
              {isPending && <Spinner />}
              Sign Up
            </Button>
          </div>
        </form>

        <div className="switch-auth text-sm md:text-lg text-center">
          Already have an account?{" "}
          <span className="text-primary">
            <Link href="/signin">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;

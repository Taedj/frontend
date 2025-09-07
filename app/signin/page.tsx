"use client";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { colors } from "../../constants/constants";
import useLogin from "../../hooks/useLogin";
import Spinner from "../../components/Spinner/Spinner";

const styles = {
  input:
    "bg-bg-dark text-bg-text-less-dark w-full py-4 px-5 md:py-5 md:px-6 border-none rounded-md text-lg md:text-2xl transition-[border] duration-300 focus:outline-none",
  label: "block mb-2 md:mb-4 font-medium text-lg md:text-2xl font-bold",
};

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must not exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password is too long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const { mutate, isSuccess, isPending, isError, error } = useLogin();
  console.log({ isError, error });
  const onSubmit = (data: FormData) => {
    mutate(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  if (isSuccess) {
    redirect("/");
  }
  return (
    <div
      id="sign-in"
      className="m-0 p-0 flex justify-center items-center min-h-screen bg-bg-less-dark text-white px-4"
    >
      <div className="auth-container rounded-xl w-full max-w-[400px] md:max-w-[500px] p-6 md:p-12">
        <h1 className="text-center mb-6 md:mb-10 font-semibold text-primary text-3xl md:text-5xl">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              placeholder="kiroutek"
              name="username"
              className={styles.input}
            />
            {errors.username && (
              <p className="text-red-500 text-sm md:text-2xl my-2">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="form-group mb-6 md:mb-8">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="********"
              name="password"
              className={styles.input}
            />
            {errors.password && (
              <p className="text-red-500 text-sm md:text-2xl my-2">
                {errors.password.message}
              </p>
            )}
            {isError && (
              <p className="text-red-500 text-sm md:text-2xl my-2">
                {error?.data?.detail ?? "Something went wrong"}
              </p>
            )}
          </div>
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
              Sign In
            </Button>
          </div>
        </form>
        <div className="switch-auth text-sm md:text-lg text-center">
          Don&apos;t have an account?{" "}
          <span className="text-primary">
            <Link href="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;

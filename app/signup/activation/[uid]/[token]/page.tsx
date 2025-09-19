"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { ActivationParams } from "../../../../../hooks/useCreateUser";
import { activateUser } from "../../../../../hooks/useCreateUser";
import { useRouter } from "next/navigation";

const Activation = () => {
  const router = useRouter();
  const activationParams = useParams<ActivationParams>();
  useEffect(() => {
    activateUser(activationParams);
    setTimeout(() => router.push("/signin"), 2000);
  }, [activationParams, router]);
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-bg-less-dark px-4">
      <div className="w-full max-w-3xl flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6 rounded-full bg-white/5 p-4 sm:p-6 lg:p-10 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Account Activated!
        </h1>

        {/* Description */}
        <p className="mb-6 text-base text-gray-400 sm:text-lg md:text-xl max-w-xl sm:max-w-2xl lg:max-w-3xl">
          Your account has been successfully activated. You can now log in and
          start exploring all the features.
        </p>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-500">
          Redirecting you to the login page...
        </p>
      </div>
    </div>
  );
};

export default Activation;

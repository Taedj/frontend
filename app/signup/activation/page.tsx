import React from "react";

const ActivationPage = () => {
  return (
    <div
      id="activation"
      className="flex h-screen flex-col items-center justify-center bg-bg-less-dark px-4 text-center"
    >
      <div className="mb-6 rounded-full bg-white/5 p-6 lg:p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 lg:h-20 lg:w-20 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      </div>

      <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
        Almost There!
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-400 lg:text-xl lg:max-w-3xl">
        We’ve sent a confirmation link to your email. Please check your inbox
        and click the link to activate your account.
      </p>

      <p className="mt-10 text-sm text-gray-500 lg:text-base">
        Step 2 of 2: Activate your account
      </p>
    </div>
  );
};

export default ActivationPage;

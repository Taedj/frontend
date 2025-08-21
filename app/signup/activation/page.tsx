import React from 'react'

const ActivationPage = () => {
  return (
    <div id="activation" className="h-screen bg-bg-less-dark flex flex-col items-center justify-center text-center px-4">
    <div className="bg-white/5 p-6 rounded-full mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
    </div>

    <h1 className="text-4xl font-bold text-white mb-4">Almost There!</h1>
    <p className="text-gray-400 text-lg max-w-xl mb-8">
        We’ve sent a confirmation link to your email. Please check your inbox and click the link to activate your account.
    </p>
    <p className="text-gray-500 text-sm mt-10">Step 2 of 2: Activate your account</p>
    </div>
  )
}

export default ActivationPage
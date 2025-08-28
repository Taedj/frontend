'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <body className="flex min-h-screen items-center justify-center bg-bg-less-dark px-4 text-center">
        <div className="w-full max-w-3xl">
        <div className="mb-6 rounded-full bg-white/5 p-4 sm:p-6 lg:p-10 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 5a7 7 0 110 14a7 7 0 010-14z"/>
            </svg>
        </div>
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Page Not Found
        </h1>
        <p className="mb-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
            The page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="inline-block rounded-2xl bg-primary px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium hover:bg-red-700 transition" onClick={(e) => router.push('/')}>
            Back to Home
        </a>
        </div>
    </body>
  )
}

export default NotFound
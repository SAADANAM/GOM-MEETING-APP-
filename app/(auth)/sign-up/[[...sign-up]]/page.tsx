import React from 'react'
import { SignUp } from '@clerk/nextjs';
const SigneUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
        <SignUp /> 
    </main>
  )
}

export default SigneUpPage
import TopHeader from '@/Components/TopHeader/TopHeader'
import Link from 'next/link'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details - Foodtuck",
  description: "An online food restraunt",
};

const page = () => {
  return (
    <div className='max-w-screen-xl lg:mx-auto'>
        <TopHeader title='User Details' link1='Home' link2='User Details' link3='/userDetails' />
      <div className='px-5 py-[60px] md:p-[60px] mx-auto flex flex-col items-center justify-center gap-10'>
        <div className='text-center'>
            <h2 className='text-xl md:text-2xl font-bold text-[#333333] mb-8'>New to our website? SignUp to continue</h2>
            <Link href={'/signUp'} className='px-8 py-3 text-white bg-csYellow hover:bg-orange-500 transition-colors duration-200'>SignUp</Link>
        </div>
        <div className='text-center'>
            <h2 className='text-xl md:text-2xl font-bold text-[#333333] mb-8'>Already have an account? SignIn/login to continue</h2>
            <Link href={'/signIn'} className='px-8 py-3 text-white bg-csYellow hover:bg-orange-500 transition-colors duration-200'>SignIn</Link>
        </div>
       
      </div>
    </div>
  )
}

export default page

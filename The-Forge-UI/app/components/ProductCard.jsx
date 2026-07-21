'use client';
import React from 'react'
import imageDis from '../images/imageDis.png';
import WheyImage from "../images/WheyImage.jpg";
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row'>
      <div className='border p-3 bg-zinc-900 overflow-hidden flex border-zinc-800 h-50 w-85 md:h-70 md:w-130 rounded-xl'>
        <div className='flex flex-col justify-center items-center w-[40%]'>
          <h1 className='font-extrabold text-zinc-300 text-xl md:text-3xl text-center drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]'>Track Pants</h1>
          <h2 className='font-mono'>70% OFF </h2>
        </div>
        <div className=' w-[60%]'><Image className='' src={imageDis} alt='#' /></div>
      </div>
      <div className='border p-3 bg-zinc-900 overflow-hidden flex border-zinc-800 h-50 w-85 md:h-60 md:w-100 rounded-xl'>
        <div className=' w-[60%]'><Image className='' src={imageDis} alt='#' /></div>
        <div className='flex flex-col justify-center items-center w-[40%]'>
          <h1 className='font-extrabold text-zinc-300 text-xl md:text-3xl text-center drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]'>Track Pants</h1>
          <h2 className='font-mono'>70% OFF </h2>
        </div>
      </div>
      <div className='border p-3 bg-zinc-900 overflow-hidden flex border-zinc-800 h-50 w-85 md:h-60 md:w-100 rounded-xl'>
        <div className='flex flex-col justify-center items-center w-[40%]'>
          <h1 className='font-extrabold text-zinc-300 text-xl md:text-3xl text-center drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]'>Track Pants</h1>
          <h2 className='font-mono'>70% OFF </h2>
        </div>
        <div className=' w-[60%]'><Image src={imageDis} alt='#' /></div>
      </div>
    </div>
  )
}

export default ProductCard

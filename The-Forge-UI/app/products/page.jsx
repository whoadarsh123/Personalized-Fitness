"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence, easeIn } from "framer-motion";
import WheyImage from "../images/WheyImage.jpg";
import Image from 'next/image';

export default function products()
{
  const [isHovered, setIsHovered] = useState(null);
  const navigationConfig = [
    {name:"Protien", dropdownItems: [
      {name: "WheyIsolated", image: WheyImage},
      {name: "WheyChocolate", image: WheyImage},
      {name: "Whey", image: WheyImage},
      {name: "WheyNatural", image: WheyImage},
    ]},
    {name:"Mass gainer", dropdownItems: [
      {name: "MuscleBlage", image: WheyImage},
      {name: "BigMuscle", image: WheyImage},
      {name: "Avtar", image: WheyImage},
    ]},
    {name:"Creatine", dropdownItems: [
      {name: "Avtar", image: WheyImage},
      {name: "BeastLife", image: WheyImage},
      {name: "MuscleBlaze", image: WheyImage},
      {name: "BigMuscle", image: WheyImage},
    ]},
    {name:"Equipments", dropdownItems: [
      {name: "GymBag", image: WheyImage},
      {name: "WristBand", image: WheyImage},
      {name: "Shaker", image: WheyImage}
    ]},
  ]

  return(
    <div  className="min-h-screen bg-zinc-950 font-sans text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden relative">
    <Navbar/>
    <div className='absolute w-full top-[80px]'>
    <motion.div animate={{y:[0,30,0], x:[10, 20,10]}} transition={{duration:2, ease: "easeInOut", repeat: Infinity}} className='font-extrabold mb-10 text-blue-300 px-5 text-9xl'>BUY YOUR DREAM </motion.div> 
    <section className=' bg-zinc-900 px-5 py-3 flex gap-30 justify-center font-mono'>
    {navigationConfig.map((LinkItem , idx) =>(
      <div key={idx} onMouseEnter={()=> setIsHovered(idx)} onMouseLeave={()=> setIsHovered(null)}>
        <h1 className='cursor-pointer hover:text-amber-500'>{LinkItem.name}</h1>
        <AnimatePresence>
          {isHovered === idx && LinkItem.dropdownItems &&(
            <motion.div 
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 200, damping: 20}}
            className='size-50 absolute mt-5'
            >
              <Image  src={WheyImage} alt='Whey Image' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
    </section>
    </div>
    </div>
  )
}

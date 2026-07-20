"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence, easeIn } from "framer-motion";
import WheyImage from "../images/WheyImage.jpg";
import Image from 'next/image';

export default function products()
{
  const [isHovered, setIsHovered] = useState(null);
  const [isClicked , setIsClicked] = useState(0);

  const navigationConfig = [
    {name:"Protien", dropdownItems: [
      {name: "WheyIsolated", image: WheyImage},
      {name: "WheyChocolate", image: WheyImage},
      {name: "Whey", image: WheyImage},
      {name: "WheyNatural", image: WheyImage},
      {name: "WheyNatural", image: WheyImage},
      {name: "WheyNatural", image: WheyImage},
      {name: "WheyNatural", image: WheyImage},
    ]},
    {name:"Pre Workout", dropdownItems: [
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
    <div  className="min-h-screen bg-zinc-950 font-sans text-white pt-32 pb-20 md:px-1 overflow-x-hidden relative">
    <Navbar/>
    <div className='absolute w-full p-2 top-[60px]'>
    <motion.div animate={{y:[0,30,0], x:[10, 20,10]}} transition={{duration:2, ease: "easeInOut", repeat: Infinity}} className='font-extrabold mb-10 text-zinc-400  px-5 text-2xl md:text-8xl flex gap-2'>BUY YOUR<h1 className='text-amber-500'>DREAM</h1>GEAR</motion.div> 
    <section className='bg-zinc-900  py-3 border border-zinc-700 rounded-xl flex gap-6 w-fill justify-center font-mono md:gap-40 mb-5'>
    {navigationConfig.map((LinkItem , idx) =>(
      <div key={idx} onClick={()=> setIsClicked(idx)} onMouseEnter={()=> setIsHovered(idx)} onMouseLeave={()=> setIsHovered(null)}>
        <h1 className='cursor-pointer hover:text-amber-500 text-[10px] md:text-[15px]'>{LinkItem.name}</h1>
        <AnimatePresence>
          {isHovered === idx && LinkItem.dropdownItems &&(
            <motion.div 
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 200, damping: 20}}
            className='size-10 md:size-30 absolute mt-5'
            >
              <Image  src={WheyImage} alt='Whey Image' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
    </section>
    <section>
          <AnimatePresence mode="wait">
            <motion.div
              key={isClicked}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-hidden" 
            >
              {navigationConfig[isClicked]?.dropdownItems.map((product, pIdx) => (
                <div 
                  key={pIdx} 
                  className="group bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-900/50">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      sizes="(max-w-7xl) 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={pIdx < 4}
                    />
                  </div>
                  <div className="space-y-2 mt-auto">
                    <h3 className="font-bold text-sm text-zinc-200 group-hover:text-white transition-colors tracking-wide">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-amber-500 font-mono text-sm font-semibold">
                        {product.price}
                      </span>
                      <button className="text-[10px] bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider transition duration-200 cursor-pointer">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
    </div>
    </div>
  )
}

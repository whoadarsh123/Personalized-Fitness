"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BodyBuilder from "./images/BodyBuilder.png";
import GymImage2 from "./images/GymImage2.png";
import NextImage from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { MousePointer2,Sparkles, Cpu, Code, Layers } from "lucide-react";

const items = [
    { name: "STAY STRONG", icon: Layers, text: "THINK-GREAT" },
    { name: "REPLIT", icon: Code, text: "CLOUD DEVELOPMENT" },
    { name: "WORK HARD", icon: Cpu, text: "FEEL-GOOD" },
    { name: "EAT HEALTHY", icon: Sparkles, text: "LIVE-LONG" },
  ];

const lisItem = [
  { name: 'Weight gain', icon: MousePointer2, href: "/services" },
  { name: 'Weight loss', icon: MousePointer2, href: "/services" },
  { name: 'Strength gain', icon: MousePointer2, href: "/services" },
  { name: 'Yoga training', icon: MousePointer2, href: "/services" }
];
const duplicatedItems = [...items, ...items, ...items, ...items];

export default function GymLanding() {

  return (
    <div className="bg-zinc-950  text-zinc-100 min-h-screen font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Navbar />
      <section className="relative min-h-screen flex flex-col gap-10 top-25 md:flex-row items-center justify-start px-4 md:px-8 border-b border-zinc-900">
        <div className="absolute inset-0  from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <NextImage src={BodyBuilder} alt="#" className="h-auto" />
        </motion.div>
        <div className="max-w-3xl text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
            WORK HARDER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              OUTLIVE EVERYONE
            </span>
          </motion.h1>
        </div>

      
        <motion.div
        className="flex items-center md:hidden border border-amber-300 h-15 gap-8 w-max"
        animate={{
          x: ["10%", "-20%"],
        }}
        transition={{
          ease: "linear",
          duration: 20, 
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-950/80 "
            >
              <Icon className="w-5 h-5 text-amber-50" />
              <span className="font-extrabold text-white text-sm tracking-wide">
                {item.name}
              </span>
              <span className="text-amber-50 font-medium text-sm">
                • {item.text}
              </span>
            </div>
          );
        })}
      </motion.div>

      </section>
      <section className="relative py-15 px-4 max-w-7xl mx-auto min-h-100 flex flex-col md:flex-row items-center md:justify-around bg-zinc-950 ">
        <div className="md:h-150 md:w-150 flex text-center ">
          <NextImage className="h-auto" src={GymImage2} alt="#" />
        </div>
        <div className="border-[0.10] border-zinc-800 w-full md:w-[50%] flex flex-col justify-around items-center md:py-5 py-2 rounded-2xl md:h-120 bg-zinc-900 h-40">
          <h1 className="tracking-tighter font-black md:text-5xl text-4xl text-center text-amber-200">PREMIUM<br />WORKOUT PLAN </h1>
          {/* <ul className="hidden md:block">Weight Gain</ul>
            <ul className="hidden md:block">Weight Loss</ul>
            <ul className="hidden md:block">Strength Gain</ul>
            <ul className="hidden md:block">Yoga & Meditation </ul> */}

          {lisItem.map((item, idx) => {
            return <div className="hidden md:block font-sans text-zinc-400 text-2xl mt-2" key={idx}>{item.name} <MousePointer2 className="text-amber-500" /></div>
          })}

          <Link href="/services" className="border flex items-center justify-center text-black h-10 w-[30%] md:w-[70%] hover:border-amber-600 from-amber-500 to-orange-500 bg-gradient-to-r rounded-[7px] mt-3 p-1 font-bold">Start</Link>
        </div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [30, -60, 30] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, }}
          className="relative w-100 h-60 flex justify-center items-center opacity-80 rounded-full">
          <div className="absolute inset-0 bg-amber-600 blur-2xl opacity-80 rounded-full" />
        </motion.div>
      </section>


      <section className="py-24 px-4 bg-zinc-900/30 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Membership <span className="text-amber-500">Tiers</span>
            </h2>
            <p className="text-zinc-500 mt-2">Cards spring up and expand into full grid format upon scroll viewport entry.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          >
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
        &copy; {new Date().getFullYear()} THE FORGE GYM. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
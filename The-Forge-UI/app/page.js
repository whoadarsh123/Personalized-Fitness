"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BodyBuilder from "./images/BodyBuilder.png";
import GymImage2 from "./images/GymImage2.png";
import NextImage from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { MousePointer2, Sparkles, Cpu, Code, Layers, Weight , HandFist, Hamburger, ArrowDownUp} from "lucide-react";

const items = [
  { name: "STAY STRONG", icon: Layers, text: "THINK-GREAT" },
  { name: "REPLIT", icon: Code, text: "CLOUD DEVELOPMENT" },
  { name: "WORK HARD", icon: Cpu, text: "FEEL-GOOD" },
  { name: "EAT HEALTHY", icon: Sparkles, text: "LIVE-LONG" },
];

const lisItem = [
  { name: 'MASS', icon: Weight, description: "Progressive overload blocks for building size and raw strength.", href: "/services" },
  { name: 'POWER', icon: HandFist, description:"Fat-loss programming that preserves the muscle you already built.", href: "/services" },
  { name: 'CUT', icon: Hamburger, description:"Compound lifts and explosive work for raw functional strength.", href: "/services" },
  { name: 'FLOW', icon: ArrowDownUp, description: "Mobility and breath-led sessions that keep the rest of training honest.", href: "/services" }
];

const duplicatedItems = [...items, ...items, ...items, ...items];

export default function GymLanding() {

  return (
    <div className="bg-zinc-950  text-zinc-100 min-h-screen font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Navbar />
      <section className="relative min-h-auto flex flex-col gap-10 top-25 md:flex-row items-center justify-start px-4 md:px-8 border-b border-zinc-900">
        <div className="absolute inset-0  from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <NextImage src={GymImage2} alt="#" className="size-80 border-b-7 rounded-full mb-4 border-b-amber-700 md:size-fit" />
        </motion.div>
        <div className="max-w-3xl text-start md:text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4">
            WORK HARDER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              OUTLIVE EVERYONE
            </span>
          </motion.h1>
          <div className="text-zinc-400 md:text-xl font-extralight mb-20" >Raw effort goes in. A stronger version of you comes out. Coached strength, conditioning and mobility programs built around one idea: pressure, applied consistently, is what forges shape.</div>
        </div>

      </section>
      <section className="relative py-15 px-2 w-fill min-h-100 flex flex-col md:flex-col items-center md:justify-around bg-zinc-950">
        <motion.div
          className="flex items-center border border-amber-300 h-15 gap-8 w-max"
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
        <div className="md:h-fit mt-10 md:w-full px-3 items-center flex flex-col text-center ">
          <NextImage className="h-auto border-b-7 rounded-full border-b-amber-700 object-cover" src={BodyBuilder} alt="#" />
          <div className="grid grid-cols-2 md:grid-cols-4 w-full h-100 items-end sm:grid-cols-2 pt-7 gap-4">
              {lisItem.map((item, idx)=>{
                const Icon = item.icon;
            return (<motion.div initial={{y:0}} whileHover={{y:-10 }} key={idx} className="border border-zinc-700 hover:border-amber-600 bg-zinc-900 w-auto h-70 rounded-2xl">
              <div className="flex p-5 flex-col gap-3 items-start text-start">
                <div className="bg-zinc-800 p-5 rounded-full"><Icon className="text-amber-600"/></div>
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <h2 className="text-zinc-400">{item.description}</h2>
              </div>
            </motion.div>);
           })}
          </div>
           
        </div>
       
        <motion.div
          animate={{ y: [0, -20, 0], x: [30, -60, 30] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, }}
          className="relative w-[30%] h-70 flex justify-center items-center opacity-80 rounded-full">
          <div className="absolute inset-0  bg-amber-600 blur-3xl opacity-30 rounded-full" />
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
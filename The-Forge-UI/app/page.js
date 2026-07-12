"use client";

import { motion } from "framer-motion";
import { Dumbbell, Trophy, Users, HeartPulse, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import BodyBuilder from "./images/BodyBuilder.png";
import NextImage from 'next/image';
import { useState } from "react";

// Animation Variants
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function GymLanding() {

  const plans = [
    { name: "Starter", price: "$29", features: ["Access to Gym Floor", "Standard Locker", "1 Fitness Assessment"] },
    { name: "Pro Elite", price: "$59", features: ["24/7 Global Access", "All Classes Included", "Personalized Diet Plan", "Free Massage Session"], popular: true },
    { name: "VIP Titan", price: "$99", features: ["1-on-1 Dedicated Coach", "Custom Supplement Stack", "Private VIP Lounge", "Cryotherapy Access"] },
  ];


  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Navbar />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-start px-4 md:px-8 border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <NextImage src={BodyBuilder} alt="#" className="h-auto " />
        </motion.div>
        <div className="max-w-3xl text-center z-10">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
            WORK HARDER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              OUTLIVE EVERYONE
            </span>
          </motion.h1>
        </div>


      </section>


      <section className="py-15 px-4 max-w-7xl mx-auto min-h-100 flex justify-end bg-zinc-950 ">
        <motion.div
          animate={{ y: [0, -20, 0], x: [30, -60, 30] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, }}
          className="w-100 h-60 flex justify-center items-center opacity-80 rounded-full">
          <div className="absolute inset-0 bg-amber-600 blur-2xl opacity-80 rounded-full" />
        </motion.div>
      </section>

      {/* 3. SCROLL RE-ARRANGING CARDS (PRICING) */}
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

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
        &copy; {new Date().getFullYear()} THE FORGE GYM. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
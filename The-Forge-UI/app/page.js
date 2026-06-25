"use client";

import { motion } from "framer-motion";
import { Dumbbell, Trophy, Users, HeartPulse, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import BodyBuilder from "./images/BodyBuilder.png";
import NextImage from 'next/image';
import SignUpCard from "./components/SignUpCard";
import { useState } from "react";
import Login from "./components/Login";

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

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Navbar setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn}/>
     {showSignUp && (<SignUpCard setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} onClose={()=> setShowSignUp(false)}/>)}
      {showSignIn && <Login setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} onClose={()=> setShowSignIn(false)}/>}
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-start px-4 md:px-8 border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
      <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          ><NextImage src={BodyBuilder} alt="#" className="h-auto "/></motion.div>
        
        <div className="max-w-3xl text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-6 text-sm text-amber-500"
          >
            <Flame className="w-4 h-4 animate-pulse" /> RE-DEFINE YOUR LIMITS
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6"
          >
            WORK HARDER, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              OUTLIVE EVERYONE.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            A premium dark-themed aesthetic powerhouse designed for those who don't accept excuses. Track, train, and transform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-4 rounded-md tracking-wide hover:opacity-90 transition flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/20">
              GET STARTED NOW <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-800 bg-zinc-900/50 backdrop-blur hover:bg-zinc-900 text-white font-semibold px-8 py-4 rounded-md transition">
              VIEW SCHEDULE
            </button>
          </motion.div>
        </div>
        
        
      </section>

      {/* 2. SCROLL RE-ARRANGING ICONS & FEATURES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            Why Choose <span className="text-amber-500">The Forge</span>
          </h2>
          <p className="text-zinc-500 mt-2">Watch the layout snap into place as you commit.</p>
        </div>

        {/* Framing dynamic rearrangement on scroll */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

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
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                className={`p-8 rounded-2xl border flex flex-col relative ${
                  plan.popular 
                    ? "bg-zinc-900 border-amber-500 lg:py-12 shadow-2xl shadow-amber-500/5 z-10" 
                    : "bg-zinc-950/80 border-zinc-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-xs uppercase px-4 py-1 rounded-full tracking-wider">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/ month</span>
                </div>

                <ul className="space-y-4 my-6 flex-1">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-zinc-300">
                      <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-md font-bold tracking-wide transition ${
                  plan.popular 
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90" 
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}>
                  CHOOSE PLAN
                </button>
              </motion.div>
            ))}
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
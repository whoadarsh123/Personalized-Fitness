"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Flame, Dumbbell, Scale, Sparkles } from "lucide-react";

export default function PersonalTrainingBAr() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const navigationModules = [
    { name: "Weight Gain", href: "/services/personal-training/weight-gain", icon: <Scale className="w-4 h-4" /> },
    { name: "Weight Loss", href: "/services/personal-training/weight-loss", icon: <Flame className="w-4 h-4" /> },
    { name: "Strength Training", href: "/services/personal-training/strength-training", icon: <Dumbbell className="w-4 h-4" /> },
    { name: "Yoga Section", href: "/services/personal-training/yoga", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-zinc-950/80 border border-zinc-900 backdrop-blur-md rounded-2xl px-6 py-3 z-50 flex items-center justify-between shadow-2xl">
      
      {/* Brand Logo Platform */}
      <Link href="/" className="text-amber-500 font-black text-xl uppercase tracking-tighte">
        VORTEX<span className="text-amber-500 group-hover:animate-pulse">.</span>
      </Link>

      {/* Nav Menu Map */}
      <div className="flex items-center gap-1 relative">
        {navigationModules.map((module, idx) => (
          <Link
            key={module.name}
            href={module.href}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="relative px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide uppercase transition-colors duration-300 flex items-center gap-2 overflow-visible cursor-pointer select-none"
            style={{
              color: hoveredIdx === idx ? "#000000" : "#a1a1aa",
            }}
          >
            {/* Text Floating Component Wrapper */}
            <motion.span
              animate={{
                y: hoveredIdx === idx ? -2 : 0,
                scale: hoveredIdx === idx ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="z-10 flex items-center gap-2 relative pointer-events-none"
            >
              {module.icon}
              {module.name}
            </motion.span>

            {/* Crazy Shared Liquid Kinetic Layout Accent */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="kineticAccentPod"
                  initial={{ 
                    opacity: 0, 
                    scaleX: 1.3, 
                    scaleY: 0.6,
                    skewX: "-15deg"
                  }}
                  animate={{ 
                    opacity: 1, 
                    scaleX: 1, 
                    scaleY: 1,
                    skewX: "0deg"
                  }}
                  exit={{ 
                    opacity: 0, 
                    scaleX: 0.8, 
                    scaleY: 1.2,
                    skewX: "15deg"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 18,
                    mass: 0.6
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.4)] z-0"
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
    </nav>
  );
}
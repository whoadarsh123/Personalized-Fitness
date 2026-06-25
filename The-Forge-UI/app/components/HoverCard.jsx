"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HoverCard({items})
{
return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[550px] bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-6 rounded-2xl shadow-2xl shadow-black/80 z-50 grid grid-cols-2 gap-4"
    >
      {/* Subtle decorative background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none rounded-2xl" />

      {items.map((item, idx) => (
        <Link 
          key={idx} 
          href={item.href}
          className="flex gap-3 p-3 rounded-xl  transition-all border border-transparent hover:border-zinc-800 group/item relative z-10"
        >
          <div className="bg-zinc-950 p-2.5 h-fit rounded-lg border border-zinc-800 group-hover/item:border-amber-500/30 transition-colors">
            {item.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-100 group-hover/item:text-amber-400 transition-colors">
              {item.name}
            </h4>
            <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}
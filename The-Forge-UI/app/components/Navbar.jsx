"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell, ChevronRight, Target, Activity, Shield, Flame, Zap, ShoppingBag,Heart, CircleUser} from "lucide-react";
import Link from "next/link";
import HoverCard from "./HoverCard";
import { UserCard } from "./UserCard";

export default function Navbar({setShowSignUp,setShowSignIn}) {
  const [isOpen, setIsOpen] = useState(false);
 const [hoveredLinkIdx, setHoveredLinkIdx] = useState(null);
 const[islogin , setIsLogin] = useState(false);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(()=>
{
  const token = localStorage.getItem("userToken");
  if(token)
  {
    setIsLogin(true);
  }
},[]);

 

 const navigationConfig = [
    { name: "Home", href: "/", dropdownItems: null },
    { 
      name: "Services", 
      href: "/services", 
      dropdownItems: [
        { name: "Personal Training", desc: "1-on-1 custom biological coaching.", icon: <Target className="w-5 h-5 text-amber-500" />, href: "/services#pt" },
        { name: "Workout", desc: "High-octane, community energy classes.", icon: <Flame className="w-5 h-5 text-amber-500" />, href: "/services#group" },
        { name: "Nutrition Plans", desc: "Macro-calculated plans by elite dietitians.", icon: <Activity className="w-5 h-5 text-amber-500" />, href: "/services#nutrition" },
        { name: "Progress Tracker", desc: "Injury recovery and mobility mechanics.", icon: <Shield className="w-5 h-5 text-amber-500" />, href: "/services#physio" },
      ]
    },
    { 
      name: "Products", 
      href: "/products", 
      dropdownItems: [
        { name: "Whey Isolate", desc: "Ultra-pure fast-absorbing muscle recovery protein.", icon: <Zap className="w-5 h-5 text-amber-500" />, href: "/products#protein" },
        { name: "Pre-Workout Grid", desc: "Explosive energy formulas for lifting sessions.", icon: <Flame className="w-5 h-5 text-amber-500" />, href: "/products#preworkout" },
        { name: "Apparel & Gear", desc: "Premium dark-aesthetic lifting straps and hoodies.", icon: <ShoppingBag className="w-5 h-5 text-amber-500" />, href: "/products#gear" },
        { name: "Daily Essentials", desc: "Multivitamins and joint support formulas.", icon: <Heart className="w-5 h-5 text-amber-500" />, href: "/products#vitamins" },
      ]
    },
    { name: "About", href: "/about", dropdownItems: [
      {name: "Demo1", desc:"this is the demo for demo1", icon: <Zap className="w-5 h-5 text-amber-500"/>, href:"/demo1"},
      {name: "Demo2", desc:"this is the demo for demo2", icon: <Zap className="w-5 h-5 text-amber-500"/>, href:"/demo2"},
      {name: "Demo3", desc:"this is the demo for demo3", icon: <Zap className="w-5 h-5 text-amber-500"/>, href:"/demo3"}
    ] 
  }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-black tracking-wider text-xl text-white group">
          <Dumbbell className="w-6 h-6 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
          <span>THE<span className="text-amber-500">FORGE</span></span>
        </Link>

        {/* DESKTOP NAV LINKS (With Animated Hover Pill) */}
       <div className="hidden md:flex items-center gap-2 h-full">
          {navigationConfig.map((linkItem, idx) => (
            <div 
              key={idx}
              className="relative h-full flex items-center"
              // Track exactly which link index the mouse is sitting on
              onMouseEnter={() => setHoveredLinkIdx(idx)}
              onMouseLeave={() => setHoveredLinkIdx(null)}
            >
              {/* The Navbar Text Label */}
              <Link 
                href={linkItem.href} 
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition cursor-pointer"
              >
                {linkItem.name}
              </Link>

              {/* DYNAMIC HOVER CARD TRIGGER */}
              <AnimatePresence>
                {/* 
                  Only show the dropdown card if:
                  1. This specific index matches what the user is hovering over (`hoveredLinkIdx === idx`)
                  2. The link item actually has sub-elements inside its `dropdownItems` array
                */}
                {hoveredLinkIdx === idx && linkItem.dropdownItems && (
                  <HoverCard items={linkItem.dropdownItems} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* DESKTOP ACTION BUTTONS */}
        {islogin ? (
          <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
            <CircleUser className="size-7 cursor-pointer"/>
            {isHovered && (<UserCard setIsLogin={setIsLogin}/>)}
          </div>
        ) : (
        <div className="hidden md:flex items-center gap-4">
          <button onClick={()=> {setShowSignIn(true)}} className="text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition">
            Login
          </button>
          <button onClick={() => {setShowSignUp(true)}} className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-bold px-5 py-2.5 rounded-md flex items-center gap-1 hover:opacity-90 transition group shadow-lg shadow-amber-500/10">
            Get Started <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
        )}

        {/* MOBILE MENU TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-zinc-400 hover:text-white transition focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-900 overflow-hidden px-4 py-6 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-amber-500 transition-colors pl-2 border-l border-transparent hover:border-amber-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <hr className="border-zinc-900" />

            <div className="flex flex-col gap-4">
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="text-center text-zinc-400 hover:text-white font-medium py-2 rounded-md border border-zinc-900 bg-zinc-900/40"
              >
                Login
              </Link>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-3 rounded-md w-full shadow-lg shadow-amber-500/10">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
"use client";

import { motion } from "framer-motion";
import { Target, Dumbbell, Activity, Shield, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  const servicesConfig = [
    {
      id: "pt",
      name: "Personal Training",
      href: "/services/personal-training",
      tagline: "1-on-1 Elite Coaching",
      desc: "Work directly with elite biological mechanics coaches. Receive custom-tailored movement analysis, real-time form optimization, and accountability structures engineered around your specific physiology.",
      icon: <Target className="w-8 h-8 text-amber-500" />,
      features: ["Custom biometric screening", "1-on-1 private video or in-person sessions", "Adaptive weekly programmatic changes"],
      gradient: "from-amber-500/20 to-orange-600/5",
    },
    {
      id: "workout",
      name: "Workout",
      href: "/services/workout",
      tagline: "Hypertrophy & Strength Matrices",
      desc: "Stop guessing your sets and reps. Access algorithmic programming built for progressive overload optimization, structural symmetry, and explosive athletic power output metrics.",
      icon: <Dumbbell className="w-8 h-8 text-amber-500" />,
      features: ["Interactive performance logging", "Video database for movement mechanics", "Periodized block programming schedules"],
      gradient: "from-orange-500/20 to-red-600/5",
    },
    {
      id: "nutrition",
      name: "Nutrition plans",
      href: "/services/nutrition",
      tagline: "Macro-Calculated Fuel Systems",
      desc: "Premium metabolic fueling designed by elite clinical dietitians. Tailored exact calorie, macro, and micronutrient distributions mapped precisely to your daily caloric burn thresholds.",
      icon: <Activity className="w-8 h-8 text-amber-500" />,
      features: ["Custom macro-nutrient breakdowns", "Weekly inflammation-reducing meal guides", "Supplement stack integration advice"],
      gradient: "from-amber-500/20 to-yellow-600/5",
    },
    {
      id: "tracker",
      name: "Progress tracker",
      href: "/services/tracker",
      tagline: "Data-Driven Biometric Tracking",
      desc: "Visualized biological progression markers. Sync scale parameters, dynamic body measurement records, lifting volume trends, and body fat tracking data all into interactive graphs.",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      features: ["Interactive predictive trend charts", "Historical performance comparison trees", "Photo verification timeline tracking"],
      gradient: "from-zinc-800 to-zinc-900/40",
    },
  ];

  // Framer motion animation variants for cascading list presentation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
   
    <div className="min-h-screen bg-zinc-950 font-sans text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden relative">
      <Navbar/>
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20"
        >
          Premium Ecosystem
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mt-4 uppercase tracking-tight"
        >
          ENGINEERED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">RESULTS</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base md:text-lg mt-4 max-w-2xl mx-auto"
        >
          A highly specialized, data-driven framework constructed to eliminate friction and maximize biological adaptation thresholds.
        </motion.p>
      </div>

      {/* Services Grid Framework */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {servicesConfig.map((service) => (
          <motion.div
            key={service.id}
            id={service.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`bg-gradient-to-br ${service.gradient} border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all group backdrop-blur-sm shadow-xl relative overflow-hidden`}
          >
            {/* Design accents for card borders inside the grids */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
            
            <div>
              {/* Header Box of Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
                  // {service.id}
                </span>
              </div>

              {/* Title Fields */}
              <h3 className="text-2xl font-black uppercase text-zinc-100 group-hover:text-white transition-colors">
                {service.name}
              </h3>
              <p className="text-amber-500 text-xs font-semibold tracking-wide mt-1">
                {service.tagline}
              </p>
              
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                {service.desc}
              </p>

              {/* Bullet Features Component Matrix */}
              <ul className="mt-6 space-y-3 border-t border-zinc-900/60 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500/70 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Call to Engagement Footer */}
            <Link href={service.href} className="mt-8 pt-4">
              <button className="text-xs font-bold text-zinc-200 group-hover:text-amber-500 flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-wider">
                Initialize Module <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Call to Action Banner */}
      <div className="max-w-4xl mx-auto text-center mt-20 bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl font-black uppercase">Ready to enter optimization protocol?</h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">Get comprehensive system access to all four modules inside our unified user matrix dashboard ecosystem.</p>
        <Link href="/?signup=true" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm px-8 py-4 rounded-xl mt-6 shadow-lg shadow-amber-500/10 hover:opacity-95 transition cursor-pointer uppercase tracking-wide">
          Unlock All Systems <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
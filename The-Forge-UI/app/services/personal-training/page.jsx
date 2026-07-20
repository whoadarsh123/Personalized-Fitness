"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Flame, Dumbbell, User, Target, ChevronRight } from "lucide-react";

export default function SimpleTrainingForm() {
  const [activeTab, setActiveTab] = useState("gain");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const [submittedData, setSubmittedData] = useState(null);

  const categories = [
    { id: "gain", name: "Weight Gain", icon: <Scale className="w-4 h-4" /> },
    { id: "loss", name: "Weight Loss", icon: <Flame className="w-4 h-4" /> },
    { id: "strength", name: "Strength Training", icon: <Dumbbell className="w-4 h-4" /> },
  ];

  const [formData, setFormData] = React.useState({
    age: '',
    height: '',
    weight: '',
    diet_type: 'Vegetarian',
    workout_location: 'Gym'
  });

  const [lossData, setLossData] = React.useState({
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    activity_level: 'Vegetarian'
    
  });

  const handleChange = (e) => {
    if (activeTab == "gain") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    }
    else if (activeTab == "loss") {
      setLossData({
        ...lossData, [e.target.id]: e.target.value
      });
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = '';
    let payload = null;
    if (activeTab == 'gain') {
      url = "https://personalized-fitness.onrender.com/api/v1/fitness/gain";
      payload = formData;
    }
    else if (activeTab == 'loss') {
      url = "https://personalized-fitness.onrender.com/api/v1/fitness/loss";
      payload = lossData
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success:", data);
      setSubmittedData(data);
    }
    catch (error) {
      alert(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-20 px-4 md:px-8 flex flex-col items-center justify-start relative">

      {/* HEADER SECTION */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          Setup Your <span className="text-amber-500">Profile</span>
        </h1>
        <p className="text-zinc-500 text-xs md:text-sm mt-1">
          Select a category to customize your data submission fields.
        </p>
      </div>

      {/* KINETIC FILTER TABS */}
      <div className="bg-zinc-900/50 border border-zinc-900 p-1.5 flex items-center gap-1 max-w-2xl w-full mb-8 rounded-2xl shadow-xl">
        {categories.map((cat, idx) => {
          const isSelected = activeTab === cat.id;
          const isHovered = hoveredIdx === idx;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveTab(cat.id);
                setSubmittedData(null);
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative flex-1 py-2 md:p-3 text-xs font-black tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer bg-transparent border-none outline-none"
              style={{ color: isSelected || isHovered ? "#000000" : "#a1a1aa" }}
            >
              <span className="z-10 flex items-center gap-1 px-3 relative pointer-events-none">
                {cat.icon}
                {cat.name}
              </span>

              <AnimatePresence>
                {(isHovered || isSelected) && (
                  <motion.span
                    layoutId="simpleTabCapsule"
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className={`absolute inset-0 rounded-xl z-0 ${isSelected ? "bg-amber-500" : "bg-zinc-800"
                      }`}
                  />
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* DYNAMIC FORM CONTAINER */}
      <div className="max-w-2xl w-full bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">





          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {activeTab === "gain" && (
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Age</label>
                      <input id="age" type="number" onChange={handleChange} value={formData.age} placeholder="Age" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Height (Cm)</label>
                      <input id="height" value={formData.height} onChange={handleChange} type="number" placeholder="Height" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                    </div>
                  </div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Weight (KG)</label>
                  <input id="weight" value={formData.weight} onChange={handleChange} type="number" placeholder="Weight in Kg" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 mt-2">Diet Type</label>
                  <select id="diet_type" value={formData.diet_type} onChange={handleChange} name="Diet Type" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition cursor-pointer">
                    <option value="Vegitarian">Vegetarian</option>
                    <option value="Non Vegitarian">Non Vegetarian</option>
                  </select>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 mt-2">Workout Location</label>
                  <select id="workout_location" value={formData.workout_location} onChange={handleChange} name="Diet Type" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition cursor-pointer">
                    <option value="Gym">At Gym</option>
                    <option value="Home">At Home</option>
                  </select>
                </div>
              )}

              {activeTab === "loss" && (
                <div>
                   <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Age</label>
                      <input id="age" type="number" onChange={handleChange} value={lossData.age} placeholder="Age" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Height (Cm)</label>
                      <input id="height" value={lossData.height} onChange={handleChange} type="number" placeholder="Height" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                    </div>
                    <div>
                     <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 mt-2">Weight</label>
                      <input id="weight" type="number" value={lossData.weight} onChange={handleChange} placeholder="Weight" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition" required />
                    </div>
                    <div>
                     <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 mt-2">Gender</label>
                     <select id="gender"  value={lossData.gender} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition">
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     </select>
                    </div>
                  </div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 mt-2">Activity</label>
                  <select id="activity_level" value={lossData.activity_level} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition cursor-pointer">
                    <option value="Lazy">Lazy</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Activily Active">Activily Active</option>
                  </select>
                </div>
              )}

              {activeTab === "strength" && (
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2">Focus Compound Movement</label>
                  <select name="focusLift" className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition cursor-pointer">
                    <option value="squat">Barbell Squat Depth</option>
                    <option value="deadlift">Conventional Deadlift Power</option>
                    <option value="bench">Horizontal Bench Press</option>
                  </select>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <button type="submit" className="w-full bg-white text-black font-black uppercase text-xs tracking-widest py-4 rounded-xl hover:bg-zinc-200 transition cursor-pointer flex items-center justify-center gap-2">
            Submit Setup Data <ChevronRight className="w-4 h-4" />
          </button>
        </form>

        {/* OUTPUT DATA BLOCK (SIMULATED ENDPOINT RESULT) */}
        {submittedData?.predicted_macros && submittedData?.dietPlan && submittedData?.workoutPlan && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-6 border-t border-zinc-900 space-y-4">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" /> Data Captured Successfully:
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 font-mono text-xs text-zinc-400 space-y-2">
              <div><span className="text-zinc-600">Calories:</span> {submittedData.predicted_macros.Calories}</div>
              <div><span className="text-zinc-600">Protien:</span> {submittedData.predicted_macros.Protein}</div>
              <div><span className="text-zinc-600">Carbs:</span> {submittedData.predicted_macros.Carbs}</div>
              <div><span className="text-zinc-600">Fats:</span> {submittedData.predicted_macros.Fats}</div>

            </div>
            <div className="bg-zinc-950 rounded-xl font-mono text-xs space-y-5 p-1 text-zinc-300 ">
              {submittedData && <div><span className="text-zinc-600">Breakfast:</span> {submittedData.dietPlan.Breakfast}</div>}
              {submittedData && <div><span className="text-zinc-600">Lunch:</span> {submittedData.dietPlan.Lunch}</div>}
              {submittedData && <div><span className="text-zinc-600">Dinner:</span> {submittedData.dietPlan.Dinner}</div>}

            </div>
            <div className="bg-zinc-950 rounded-xl font-bold mt-10 text-xs space-y-5 p-1 text-zinc-300 ">
              {submittedData && <div><span className="text-zinc-600 font-bold">Schedule: </span> {submittedData.workoutPlan.Schedule}</div>}
              {submittedData && <div><span className="text-zinc-600  font-bold">Lunch: </span> {submittedData.dietPlan.Lunch}</div>}
              {submittedData && <div><span className="text-zinc-600 font-bold">Dinner: </span> {submittedData.dietPlan.Dinner}</div>}
            </div>
          </motion.div>
        )}
        
        {submittedData?.predicted_macros && submittedData?.dietPlan && submittedData?.cardioAndWorkoutPlan && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-6 border-t border-zinc-900 space-y-4">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" /> Data Captured Successfully:
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 font-mono text-xs text-zinc-400 space-y-2">
              <div><span className="text-zinc-600">Calories:</span> {submittedData.predicted_macros.Calories}</div>
              <div><span className="text-zinc-600">Protien:</span> {submittedData.predicted_macros.Protein}</div>
              <div><span className="text-zinc-600">Carbs:</span> {submittedData.predicted_macros.Carbs}</div>
              <div><span className="text-zinc-600">Fats:</span> {submittedData.predicted_macros.Fats}</div>

            </div>
            <div className="bg-zinc-950 rounded-xl font-mono text-xs space-y-5 p-1 text-zinc-300 ">
              {submittedData && <div><span className="text-zinc-600">Meal 1:</span> {submittedData.dietPlan.Meal1}</div>}
              {submittedData && <div><span className="text-zinc-600">Meal 2:</span> {submittedData.dietPlan.Meal2}</div>}
              {submittedData && <div><span className="text-zinc-600">Meal 3:</span> {submittedData.dietPlan.Meal3}</div>}
              {submittedData && <div><span className="text-zinc-600">Meal 4:</span> {submittedData.dietPlan.Meal4}</div>}

            </div>
            <div className="bg-zinc-950 rounded-xl font-bold mt-10 text-xs space-y-5 p-1 text-zinc-300 ">
              {submittedData && <div><span className="text-zinc-600 font-bold">Intensity: </span> {submittedData.cardioAndWorkoutPlan.Intensity}</div>}
              {submittedData && <div><span className="text-zinc-600  font-bold">Cardio: </span> {submittedData.cardioAndWorkoutPlan.CardioRoutine}</div>}
              {submittedData && <div><span className="text-zinc-600 font-bold">Exercises: </span> {submittedData.cardioAndWorkoutPlan.Exercises}</div>}
            </div>
          </motion.div>
        )}
      </div>

    </div>
  );
}
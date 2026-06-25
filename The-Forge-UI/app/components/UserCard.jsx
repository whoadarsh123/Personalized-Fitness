"use client"

import { useState } from "react";

export function UserCard({setIsLogin})
{

    return (
       <div className="absolute right-0 top-[53px] right-[20px]  bg-zinc-900/90 border border-amber-100 rounded-2xl shadow-xl z-[1000] min-w-[260px] p-6 flex flex-col items-center font-sans transition-all duration-200 ease-out">
            
            {/* Upper Profile Decorative Circle Badge */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                
            </div>

            {/* Profile Meta Info Strings */}
            <h3 className="m-0 text-lg font-semibold text-gray-800 text-center">
                Name hare
            </h3>
            <p className="mt-1 mb-5 text-sm text-gray-500 tracking-wide text-center">
                Email hare
            </p>
            

            <hr className="w-full border-t border-gray-100 m-0 mb-4" />

            {/* Micro Interaction Action Button (Logout) */}
            <button 
                className="w-full bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white font-semibold text-sm tracking-wide py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md hover:shadow-red-500/20 -translate-y-0 hover:-translate-y-0.5 transition-all duration-200 ease-in-out cursor-pointer"
            onClick={()=> setIsLogin(false)}>
                Logout Account
            </button>
        </div>
    );
}
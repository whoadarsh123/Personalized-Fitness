"use client"
import { useState, useEffect } from "react";
import { X,Eye, EyeOff, Mail, Lock, User, ChevronRight } from "lucide-react";

export default function SignUpCard({onClose, setShowSignIn, setShowSignUp})
{
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({name:"", email:"", password:""});

    const handleSubmit = async (e) => {
    e.preventDefault();

if (formData.password === formData.password2) {
    try {
        const response = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
            alert(data.message || "Account Created Successfully");

            if(data.token)
            {
              localStorage.setItem("userToken", data.token);
            }

            setTimeout(() => {
                if (onClose) onClose();
            }, 1000);
        } else {
            alert(data.message || "Something went wrong");

             setTimeout(() => {
                if (onClose) onClose();
            }, 1000);
        }

    } catch (error) {
        alert(error + " - cannot connect to backend server");
    }
    console.log("Submitting:", formData);
} else {
    alert("Enter Correct Password");
}
  };

return(
<div className="fixed top-[90px]  left-1/2  -translate-x-1/2 w-[500px] h-140 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-6 rounded-2xl shadow-2xl shadow-black/80 z-50 grid grid-rows-1 gap-4">
<X className="opacity-30 cursor-pointer" onClick={()=> onClose(true)}/>
<form onSubmit={handleSubmit} className="space-y-8 flex-col justify-center items-center">
        
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-12 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type={showPassword ? "text" : "Confirm-Password"}
            required
            placeholder="Confirm Password"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-12 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition"
            onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-1 hover:opacity-95 transition group shadow-lg shadow-amber-500/10 cursor-pointer"
        >
          CREATE ACCOUNT <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </form>

      <p className="text-center text-zinc-500 text-sm mt-6">
        Already have an account?{" "}
        <button onClick={()=> {setShowSignUp(false); setShowSignIn(true);}} className="text-amber-500 hover:underline font-medium">
          Log In
        </button>
      </p>
</div>
);
}
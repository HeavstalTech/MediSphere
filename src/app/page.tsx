"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { 
  HeartPulse, ShieldCheck, Globe, Activity, Stethoscope, 
  Pill, MapPin, Users, PhoneCall, ArrowRight 
} from "lucide-react";

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500), 
      setTimeout(() => setStep(3), 4500), 
      setTimeout(() => setStep(4), 6000), 
      setTimeout(() => onComplete(), 7500), 
    ];
    let interval: NodeJS.Timeout;
    if (step === 3) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
      }, 50);
    }

    return () => {
      timers.forEach(clearTimeout);
      if (interval) clearInterval(interval);
    };
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 font-mono text-emerald-400 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-grid-pattern bg-grid pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p>{">"} SYSTEM.INIT(HEALTH_NODE)</p>
            <h1 className="mt-2 text-xl md:text-2xl font-bold tracking-widest text-white uppercase">
              The Medisphere Initiates
            </h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <p className="text-emerald-500 mb-2">ON-CHAIN VERIFIED</p>
            <h2 className="text-4xl font-bold text-white tracking-widest">$MEDISPHERE</h2>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center w-64">
            <p className="mb-4 text-sm">DECENTRALIZED HEALTHCARE</p>
            <div className="w-full h-4 border border-emerald-500 p-1">
              <motion.div className="h-full bg-emerald-500" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </div>
            <p className="mt-2 text-xs text-emerald-600">SECURING PROTOCOL...</p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="3" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
             <div className="relative flex items-center justify-center w-48 h-48 border-4 border-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <span className="text-5xl font-black text-white">{progress}%</span>
                <p className="absolute -bottom-8 text-emerald-500 font-bold tracking-widest">SECURED</p>
             </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="4" className="flex gap-2 text-5xl md:text-8xl font-black text-white mix-blend-difference">
            {"MEDISPHERE".split("").map((letter, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MediSpherePage() {
  const [introFinished, setIntroFinished] = useState(false);

  if (!introFinished) {
    return <BootSequence onComplete={() => setIntroFinished(true)} />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen relative overflow-hidden">
      
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartPulse className="text-emerald-500" size={32} />
          <span className="text-xl font-bold text-white tracking-wide">MediSphere</span>
        </div>
        <ConnectButton />
      </nav>

      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-sm">
            ● Presale is Live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Healthcare <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Without Borders.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            To become the global leading digital healthcare ecosystem, transforming how people access medical care through technology, compassion, and innovation.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              Buy $MEDISPHERE <ArrowRight size={20} />
            </button>
            <button className="border border-slate-700 hover:border-emerald-500 text-white px-8 py-3 rounded-full font-bold transition-colors">
              Read Whitepaper
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative flex justify-center">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="relative z-10 w-full max-w-md aspect-square">
             <div className="w-full h-full rounded-full border border-emerald-500/30 flex items-center justify-center overflow-hidden bg-slate-900 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                <Image 
                  src="/MediSphere.png" 
                  alt="MediSphere Coin" 
                  width={500} 
                  height={500} 
                  className="object-contain w-full h-full p-8"
                  priority
                />
             </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Ecosystem Utility</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
             {[
                { icon: <PhoneCall size={28}/>, title: "Online Consultations", text: "Video, voice, and chat with licensed professionals." },
                { icon: <Pill size={28}/>, title: "E-Prescriptions", text: "Instant, secure digital prescriptions and pharmacy integration." },
                { icon: <HeartPulse size={28}/>, title: "Home Nursing", text: "Doorstep nursing services for recovering & elderly patients." },
                { icon: <Activity size={28}/>, title: "Remote Follow-Up", text: "Digital medical records and continuous health monitoring." },
                { icon: <Stethoscope size={28}/>, title: "Specialist Access", text: "Bridging the gap for rural communities to see specialists." },
                { icon: <ShieldCheck size={28}/>, title: "Secure Data", text: "Blockchain-secured patient-doctor communication." },
             ].map((item, i) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.text}</p>
                </div>
             ))}
           </div>
        </div>
      </section>   
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} MediSphere ($MEDISPHERE). All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

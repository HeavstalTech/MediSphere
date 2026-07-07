// src/components/InformationModal.tsx
"use client";

import { motion } from "motion/react";
import { Terminal, Copy, AlertTriangle } from "lucide-react";

interface InformationModalProps {
  onEnter: () => void;
}
export default function InformationModal({ onEnter }: InformationModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto"
    >
      <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/30 p-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 text-emerald-500 font-bold">
          <Terminal size={20} />
          <span>SYS.PROTOCOL</span>
        </div>
        <button onClick={onEnter} className="text-slate-400 hover:text-white tracking-widest text-sm">
          [ SKIP TO SITE ]
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          THE MOVEMENT IS LIVE
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
          THE GREEN <br />
          <span className="text-emerald-500">PULSE</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 border-l-4 border-emerald-500 pl-4">
          The liquidity and healthcare index layer for a decentralized world.
        </h2>

        <div className="space-y-6 text-slate-400 leading-relaxed font-sans text-lg">
          <p>
            MediSphere turns global healthcare fragmentation into a unified, on-chain narrative. We are building the infrastructure for real, community-owned healthcare access—borderless, transparent, and verifiable on the blockchain.
          </p>
          <p>
            This is not just another utility token. It is the financial layer around global telemedicine—a protocol built by the people, owned by the people, and secured on-chain. We never stopped believing in accessible health, and now that belief has infrastructure.
          </p>
        </div>

        <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 flex flex-col items-center text-center space-y-4">
          <div className="text-xs text-emerald-600 tracking-widest uppercase">
            Experimental • Community-Built • Global Access
          </div>
          <button className="w-full md:w-auto bg-emerald-500 text-slate-950 font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors">
            <Copy size={20} /> COPY CONTRACT ADDRESS
          </button>
          <p className="text-xs text-slate-500 break-all">
            CA: 0xMediSphereHealthTokenExampleAddress123456789
          </p>
        </div>

        <div className="flex gap-4 p-4 border border-yellow-500/30 bg-yellow-500/5 text-yellow-500/80 text-sm">
          <AlertTriangle className="shrink-0" />
          <p>
            <strong>EXPERIMENTAL AND HIGH-RISK.</strong> The MediSphere movement is a community-driven experiment in decentralized telemedicine. Nothing here is financial advice. Verify everything on-chain and never risk more than you can afford to lose.
          </p>
        </div>

        <div className="pt-12 border-t border-emerald-500/20">
          <h3 className="text-emerald-500 text-sm tracking-[0.2em] mb-4">WHY MEDISPHERE?</h3>
          <h2 className="text-3xl font-bold text-white mb-6">WE ARE THE DECENTRALIZED CLINIC.</h2>
          <p className="text-slate-400 font-sans mb-8">
            Direct exposure to the most critical sector in human history: Health. When the decentralized health meta moves, the herd moves with it. No borders, no waiting rooms, just access.
          </p>
          <button 
            onClick={onEnter}
            className="w-full bg-slate-100 text-slate-950 text-xl font-black py-6 uppercase tracking-widest hover:bg-white transition-colors border-4 border-slate-100 hover:border-emerald-500"
          >
            Enter The Ecosystem
          </button>
        </div>
      </div>
    </motion.div>
  );
}

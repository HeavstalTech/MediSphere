import React from "react";
import { Send, Twitter } from "lucide-react";
import ScrollReveal from "@/components/medisphere/ScrollReveal";
import SectionHeading from "@/components/medisphere/SectionHeading";

const COMMUNITY_BG = "https://media.base44.com/images/public/user_6a4c0328a821293668ffdc69/fbe6052e7_IMG-20260706-WA00621.jpg";

const socials = [
  { icon: Send, label: "Telegram", desc: "Join the conversation", href: "https://t.me/medispheretoken", color: "#00D26A" },
  { icon: Twitter, label: "X (Twitter)", desc: "Follow for updates", href: "https://x.com/MediSpheretoken", color: "#FFFFFF" },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img src={COMMUNITY_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A12] via-[#050A12]/60 to-[#050A12]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Community"
          title="Join the MediSphere movement"
          subtitle="Connect with patients, doctors, and innovators building the future of healthcare."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {socials.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-8 flex items-center gap-5 group min-h-[100px]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00D26A]/10 border border-[#00D26A]/20 flex items-center justify-center">
                  <s.icon style={{ color: s.color }} size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-0.5">{s.label}</h3>
                  <p className="text-white/40 text-sm">{s.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

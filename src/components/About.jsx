import React from "react";
import { Heart, Globe, Shield } from "lucide-react";
import ScrollReveal from "@/components/medisphere/ScrollReveal";
import SectionHeading from "@/components/medisphere/SectionHeading";

const ABOUT_BG = "https://media.base44.com/images/public/user_6a4c0328a821293668ffdc69/922517773_66b45b3cc9ed600c9c47c681c0ee353b.jpg";

const cards = [
  {
    icon: Heart,
    title: "Our Vision",
    desc: "A world where quality healthcare is not a privilege but a universal right - accessible to every individual regardless of geography or economic status.",
  },
  {
    icon: Globe,
    title: "Our Mission",
    desc: "Build a blockchain-powered healthcare ecosystem that makes healthcare more accessible, affordable, and connected worldwide.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    desc: "Trust, transparency, and innovation at the core of every interaction - securing patient data and enabling seamless care across borders.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About MediSphere"
          title="Healthcare reimagined for a connected world"
          subtitle="MediSphere is more than a token - it's a movement to democratize healthcare through blockchain technology."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div className="glass-card-hover p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#00D26A]/10 border border-[#00D26A]/20 flex items-center justify-center mb-6">
                  <card.icon className="text-[#00D26A]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

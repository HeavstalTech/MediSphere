import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/medisphere/ScrollReveal";
import SectionHeading from "@/components/medisphere/SectionHeading";

const faqs = [
  {
    q: "What is MediSphere?",
    a: "MediSphere is a blockchain-powered healthcare ecosystem that connects patients with trusted healthcare professionals through blockchain technology and digital innovation.",
  },
  {
    q: "How do I buy $MEDISPHERE?",
    a: "You can purchase $MEDISPHERE tokens on supported decentralized exchanges.",
  },
  {
    q: "What makes MediSphere unique?",
    a: "MediSphere bridges the gap between blockchain technology and real-world healthcare.",
  },
  {
    q: "What is the utility of the $MEDISPHERE token?",
    a: "The $MEDISPHERE token powers the entire ecosystem - enabling access to healthcare services, governance, and community rewards.",
  },
  {
    q: "What are the future plans?",
    a: "Our roadmap includes AI healthcare integration, a dedicated mobile app, global expansion, strategic partnerships, and the development of a complete worldwide healthcare ecosystem that transforms how patients and providers interact.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about MediSphere and the $MEDISPHERE token."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#00D26A] transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/50 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

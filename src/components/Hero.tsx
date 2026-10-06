import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-36 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-14">
        <div className="max-w-4xl flex-1">
        {/* Subtle status kicker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-[#666666] tracking-wider uppercase mb-8"
        >
          Data Scientist · AI/ML Builder
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold text-[#171717] tracking-tight leading-[1.08] mb-8 text-balance"
        >
          Building intelligent systems that solve real problems.
        </motion.h1>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base sm:text-xl text-[#666666] font-normal leading-relaxed max-w-2xl mb-12"
        >
          A Data Scientist and AI/ML builder exploring machine learning, generative AI, data, automation, and real-world products.
        </motion.p>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-5 py-2.5 text-xs font-medium text-white bg-[#171717] hover:bg-[#333333] rounded-md transition-colors inline-flex items-center gap-2"
          >
            <span>View Projects</span>
            <span>→</span>
          </a>

          <button
            onClick={onOpenCvModal}
            className="px-5 py-2.5 text-xs font-medium text-[#171717] bg-white hover:bg-[#F4F5F2] border border-[#E8E8E3] rounded-md transition-colors"
          >
            Download CV
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:ml-6 pl-2 sm:border-l border-[#E8E8E3]">
            <a
              href="https://github.com/aarnav-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#666666] hover:text-[#171717] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aarnav-garg-93279932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#666666] hover:text-[#171717] flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative isolate w-full max-w-[260px] sm:max-w-[300px] mx-auto md:mx-0 md:flex-shrink-0"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 translate-x-2.5 translate-y-2.5 rounded-2xl border border-[#C8B98E]"
          />
          <div className="rounded-2xl border border-[#171717] bg-[#FAFAF8] p-2.5 shadow-[0_24px_60px_rgba(23,23,23,0.12)]">
            <div className="overflow-hidden rounded-xl border border-[#171717]/20">
              <img
                src="/Aarnav.jpeg"
                alt="Aarnav Garg"
                className="block aspect-[4/5] w-full object-cover object-[center_25%]"
              />
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
};

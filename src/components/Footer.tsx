import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 pb-8">
        <div>
          <span className="text-sm font-semibold tracking-wider text-[#171717] block">
            AARNAV GARG
          </span>
          <p className="text-xs text-[#666666] mt-0.5">
            Data Scientist · AI/ML Builder
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#666666]">
          <a
            href="https://github.com/aarnav-devs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aarnav-garg-93279932a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aarnavgarg18@gmail.com"
            className="hover:text-[#171717] transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#171717] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      <div className="pt-6 border-t border-[#E8E8E3] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#888888] font-mono">
        <p>© 2026 Aarnav Garg</p>
        <p>Curious about how data becomes intelligence.</p>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);
  const email = 'aarnavgarg18@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      {/* Quiet section label */}
      <div className="mb-10">
        <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
          CONTACT
        </span>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-4xl sm:text-6xl font-semibold text-[#171717] tracking-tight leading-[1.1] mb-6">
          Let's build something intelligent.
        </h2>

        <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-12 max-w-xl">
          Whether you want to discuss a new AI experiment, data science pipeline, or software system, my inbox is open.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 text-xs font-medium text-white bg-[#171717] hover:bg-[#333333] rounded-md transition-colors inline-flex items-center gap-2"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>

          <button
            onClick={onOpenCvModal}
            className="px-6 py-3 text-xs font-medium text-[#171717] bg-white hover:bg-[#F4F5F2] border border-[#E8E8E3] rounded-md transition-colors"
          >
            Download CV
          </button>
        </div>

        {/* Socials & Direct Reach Row */}
        <div className="pt-8 border-t border-[#E8E8E3] flex flex-wrap items-center justify-between gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#666666]">Email:</span>
            <a href={`mailto:${email}`} className="text-[#171717] hover:underline underline-offset-4">
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="ml-2 text-[#666666] hover:text-[#171717] transition-colors"
              title="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#171717]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-6 text-[#171717]">
            <a
              href="https://github.com/aarnav-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#666666] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aarnav-garg-93279932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#666666] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

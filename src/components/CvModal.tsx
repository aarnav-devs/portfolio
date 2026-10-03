import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, Mail, Github, Linkedin } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aarnav-Garg-CV.pdf';
    link.download = 'Aarnav-Garg-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/25 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-xl bg-white border border-[#E8E8E3] rounded-lg p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.06)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-[#E8E8E3]">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#666666] tracking-wider block mb-1">
                Curriculum Vitae
              </span>
              <h3 className="text-xl font-semibold text-[#171717]">Aarnav Garg</h3>
              <p className="text-xs text-[#666666] mt-0.5">Data Scientist · AI/ML Builder</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#666666] hover:text-[#171717] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6 text-xs sm:text-sm">
            <div>
              <h4 className="text-[11px] font-mono uppercase text-[#666666] tracking-wider mb-2">
                Profile
              </h4>
              <p className="text-[#171717] leading-relaxed">
                Data Scientist and AI/ML builder focused on machine learning algorithms, generative AI pipelines, data analytics, and software engineering. Practical experience building adaptive learning loops (EchoLearn), telemetry platforms (FITCLIK), and autonomous desktop assistants (Friday).
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-mono uppercase text-[#666666] tracking-wider mb-2">
                Technical Toolkit
              </h4>
              <div className="font-mono text-xs text-[#171717] flex flex-wrap gap-x-2 gap-y-1">
                <span>Python</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>SQL</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Machine Learning</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Deep Learning</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Generative AI (RAG, Gemma)</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Data Science</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Data Analysis</span>
                <span className="text-[#D8D8D3]">·</span>
                <span>Robotics</span>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-mono uppercase text-[#666666] tracking-wider mb-2">
                Selected Work
              </h4>
              <ul className="space-y-1.5 text-xs text-[#666666]">
                <li><strong className="text-[#171717]">EchoLearn:</strong> Voice-based AI tutor utilizing speech processing, Gemma, ChromaDB, and real-time verbal gap analysis.</li>
                <li><strong className="text-[#171717]">FITCLIK:</strong> Health platform integrating GPS telemetry, running splits, and social milestones.</li>
                <li><strong className="text-[#171717]">Friday:</strong> Local conversational desktop assistant for OS workflow automation.</li>
                <li><strong className="text-[#171717]">RoboSumoBot:</strong> Autonomous combat sumo robot with infrared edge detection.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-mono uppercase text-[#666666] tracking-wider mb-2">
                Education
              </h4>
              <p className="text-[#171717] font-medium">Bal Bharati Public School, Noida, Uttar Pradesh</p>
              <p className="text-xs text-[#666666]">Schooling · Core coursework in Mathematics, Physics, Computer Science, and Data Science / AI.</p>
            </div>

            {/* Direct Contact & Socials */}
            <div className="pt-4 border-t border-[#E8E8E3] space-y-2 font-mono text-xs text-[#666666]">
              <div className="flex items-center justify-between">
                <span>Email:</span>
                <a href="mailto:aarnavgarg18@gmail.com" className="text-[#171717] hover:underline">
                  aarnavgarg18@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>GitHub:</span>
                <a href="https://github.com/aarnav-devs" target="_blank" rel="noopener noreferrer" className="text-[#171717] hover:underline">
                  github.com/aarnav-devs
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>LinkedIn:</span>
                <a href="https://www.linkedin.com/in/aarnav-garg-93279932a/" target="_blank" rel="noopener noreferrer" className="text-[#171717] hover:underline">
                  linkedin.com/in/aarnav-garg-93279932a
                </a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E8E3]">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-[#666666] hover:text-[#171717] transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-medium text-white bg-[#171717] hover:bg-[#333333] rounded-md transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

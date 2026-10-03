import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/portfolio';
import { 
  EchoLearnVisual, 
  FitclikVisual, 
  FridayVisual, 
  RoboSumoVisual, 
  QueueVisual, 
  HouseRateVisual, 
  FarmXVisual, 
  MinimalVisual 
} from './ProjectVisuals';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case 'echolearn':
        return <EchoLearnVisual />;
      case 'fitclik':
        return <FitclikVisual />;
      case 'friday':
        return <FridayVisual />;
      case 'robosumo':
        return <RoboSumoVisual />;
      case 'queue':
        return <QueueVisual />;
      case 'houserate':
        return <HouseRateVisual />;
      case 'farmx':
        return <FarmXVisual />;
      default:
        return <MinimalVisual title={project.title} category={project.category} />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs"
        />

        {/* Modal Window in clean white */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white border border-[#E8E8E3] rounded-lg p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Top navigation row */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E8E8E3] mb-8">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to projects</span>
            </button>

            <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
              <span>PROJECT {project.number}</span>
              <button
                onClick={onClose}
                className="p-1 hover:text-[#171717] transition-colors"
                aria-label="Close project view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title Header */}
          <div className="mb-8">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-base text-[#666666] leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Product Visual Area */}
          <div className="mb-10">
            <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-2">
              System Architecture & Interface
            </div>
            {renderVisual()}
          </div>

          {/* Content */}
          <div className="space-y-8 text-sm">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-semibold">
                Overview
              </h2>
              <p className="text-[#666666] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {(project.problem || project.approach) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E8E8E3]">
                {project.problem && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] mb-1.5 font-semibold">
                      The Problem
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] mb-1.5 font-semibold">
                      Technical Approach
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}
              </div>
            )}

            {project.howItWorks && project.howItWorks.length > 0 && (
              <div className="pt-6 border-t border-[#E8E8E3]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] mb-3 font-semibold">
                  How It Works
                </h3>
                <div className="space-y-2">
                  {project.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-[#FAFAF8] border border-[#E8E8E3] text-xs">
                      <span className="font-mono text-[#171717] font-semibold shrink-0">
                        0{idx + 1}
                      </span>
                      <p className="text-[#171717] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-6 border-t border-[#E8E8E3]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-semibold">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-mono text-[#666666]">
                {project.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {idx < project.technologies.length - 1 && (
                      <span className="text-[#D8D8D3]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E8E3] flex items-center justify-between text-xs text-[#666666] font-mono">
              <a
                href="https://github.com/aarnav-devs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#171717] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/aarnav-devs</span>
              </a>
              <span>Active Research Workstream</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

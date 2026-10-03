import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/projects';
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

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'ai-ml' | 'data-science' | 'software' | 'robotics'>('all');

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'software', label: 'Software' },
    { id: 'robotics', label: 'Robotics' },
  ] as const;

  const featured = PROJECTS.filter((p) => p.isFeatured && (filter === 'all' || p.filterCategory === filter));
  const additional = PROJECTS.filter((p) => !p.isFeatured && (filter === 'all' || p.filterCategory === filter));

  const renderProjectVisual = (project: Project) => {
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
    <section id="projects" className="py-24 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      {/* Top section row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block mb-2">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
            Case Studies & Systems
          </h2>
        </div>

        {/* Minimal text-based filter */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#666666] overflow-x-auto pb-1">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`transition-colors whitespace-nowrap ${
                filter === opt.id
                  ? 'text-[#171717] font-semibold underline underline-offset-4 decoration-[#171717]'
                  : 'hover:text-[#171717]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects: Editorial Case Studies separated by whitespace and thin dividers */}
      <div className="space-y-24 mb-24">
        {featured.map((project) => (
          <article
            key={project.id}
            className="pt-8 border-t border-[#E8E8E3] first:border-t-0 first:pt-0"
          >
            {/* Number & Category */}
            <div className="flex items-baseline justify-between mb-3 text-xs font-mono text-[#666666]">
              <span>{project.number}</span>
              <span>{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-6">
              {project.title}
            </h3>

            {/* Large Project Visual */}
            <div
              onClick={() => onSelectProject(project)}
              className="mb-8 cursor-pointer transition-opacity hover:opacity-95"
            >
              {renderProjectVisual(project)}
            </div>

            {/* Description & Action */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
              <p className="text-sm text-[#666666] leading-relaxed max-w-xl font-normal">
                {project.overview}
              </p>

              <button
                onClick={() => onSelectProject(project)}
                className="text-xs font-medium text-[#171717] hover:text-[#666666] transition-colors whitespace-nowrap inline-flex items-center gap-1.5 self-start sm:self-auto font-mono"
              >
                <span>View project</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Additional Projects: Clean Editorial Index Table */}
      {additional.length > 0 && (
        <div className="pt-16 border-t border-[#E8E8E3]">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block mb-1">
              ARCHIVE & EXPERIMENTS
            </span>
            <h4 className="text-xl font-semibold text-[#171717] tracking-tight">
              Additional Research & Hardware Builds
            </h4>
          </div>

          <div className="divide-y divide-[#E8E8E3] border-y border-[#E8E8E3]">
            {additional.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer hover:bg-[#F4F5F2]/50 transition-colors px-2 rounded-sm"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-[#666666] shrink-0">
                    {project.number}
                  </span>
                  <div>
                    <h5 className="text-sm font-semibold text-[#171717] group-hover:text-[#666666] transition-colors">
                      {project.title}
                    </h5>
                    <p className="text-xs text-[#666666] mt-0.5 sm:hidden">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-xs font-mono text-[#666666] text-left">
                  {project.category}
                </div>

                <div className="flex items-center gap-6 justify-between sm:justify-end text-xs font-mono text-[#666666]">
                  <span className="hidden md:inline">
                    {project.technologies.slice(0, 2).join(' · ')}
                  </span>
                  <span className="text-[#171717] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>View</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

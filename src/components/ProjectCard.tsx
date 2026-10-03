import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
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
    <div
      onClick={() => onSelect(project)}
      className="p-6 rounded-lg bg-white border border-[#E8E8E3] hover:border-[#171717] transition-colors cursor-pointer group"
    >
      <div className="flex items-baseline justify-between mb-2 text-xs font-mono text-[#666666]">
        <span>{project.number}</span>
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <h4 className="text-xl font-semibold text-[#171717] mb-1">{project.title}</h4>
      <p className="text-xs font-mono text-[#666666] mb-4">{project.category}</p>
      <div className="mb-4">{renderVisual()}</div>
      <p className="text-xs text-[#666666] leading-relaxed mb-4">{project.tagline}</p>
      <div className="text-[11px] font-mono text-[#171717]">View details →</div>
    </div>
  );
};

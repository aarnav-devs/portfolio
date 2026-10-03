import React, { useState } from 'react';
import { SKILLS } from '../data/skills';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      {/* Quiet section label */}
      <div className="mb-10">
        <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
          TOOLKIT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Column: Heading & Context */}
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-4">
            Core Technical Disciplines
          </h2>
          <p className="text-sm text-[#666666] leading-relaxed">
            A focused toolkit spanning mathematical foundations, neural architectures, and software engineering.
          </p>

          {/* Active skill description callout */}
          <div className="mt-8 pt-6 border-t border-[#E8E8E3] min-h-[70px]">
            {hoveredSkill ? (
              <p className="text-xs text-[#171717] leading-relaxed font-mono">
                {SKILLS.find((s) => s.id === hoveredSkill)?.description}
              </p>
            ) : (
              <p className="text-xs text-[#888888] font-mono">
                Hover any discipline to review specific applications.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Clean Typographic List */}
        <div className="md:col-span-7">
          <div className="divide-y divide-[#E8E8E3] border-y border-[#E8E8E3]">
            {SKILLS.map((skill) => (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="py-4 sm:py-5 flex items-baseline justify-between group cursor-default"
              >
                <span className="text-xl sm:text-2xl font-semibold text-[#171717] uppercase tracking-tight group-hover:underline underline-offset-4 decoration-[#666666] transition-all">
                  {skill.name}
                </span>

                <span className="text-xs font-mono text-[#666666] uppercase">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

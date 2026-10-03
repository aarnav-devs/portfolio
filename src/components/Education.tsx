import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      {/* Quiet section label */}
      <div className="mb-10">
        <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
          EDUCATION
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-4">
            Academic Background
          </h2>
          <p className="text-sm text-[#666666] leading-relaxed">
            Theoretical grounding across machine learning algorithms, discrete mathematics, and computational systems.
          </p>
        </div>

        {/* Right Column: Clean Minimalist Timeline */}
        <div className="md:col-span-7">
          <div className="pl-6 border-l border-[#E8E8E3] relative space-y-8">
            <div className="relative">
              {/* Subtle timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FAFAF8] border border-[#171717]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold text-[#171717]">
                  Bal Bharati Public School
                </h3>
                <span className="text-xs font-mono text-[#666666]">
                  Schooling
                </span>
              </div>

              <div className="text-xs font-mono text-[#666666] mb-4">
                Noida, Uttar Pradesh
              </div>

              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                Academic education with rigorous foundational coursework in Mathematics, Science, Computer Science, and self-directed exploration in Data Science, Machine Learning, and Artificial Intelligence.
              </p>

              <div className="text-xs font-mono text-[#171717]">
                Areas of Focus: Mathematics · Computer Science · Physics · Machine Learning · Python
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

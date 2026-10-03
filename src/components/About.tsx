import React from 'react';

export const About: React.FC = () => {
  const capabilities = [
    'Python',
    'Machine Learning',
    'Generative AI',
    'Data Science',
    'Data Analysis',
    'Robotics'
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-10 border-t border-[#E8E8E3] max-w-6xl mx-auto">
      {/* Quiet section label */}
      <div className="mb-10">
        <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
          ABOUT
        </span>
      </div>

      {/* Editorial Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start mb-16">
        {/* Left Column: Large statement */}
        <div className="md:col-span-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight leading-snug">
            Curious about how raw data becomes operational intelligence.
          </h2>
        </div>

        {/* Right Column: Professional Narrative */}
        <div className="md:col-span-7 space-y-5 text-sm sm:text-base text-[#666666] leading-relaxed">
          <p>
            I am a Data Scientist and AI/ML builder focused on applied machine learning, semantic retrieval pipelines, data analytics, and software automation.
          </p>
          <p>
            My work revolves around transforming complex technical concepts into intuitive, working products—ranging from voice-based adaptive AI tutors powered by Gemma and ChromaDB (EchoLearn) to local conversational voice assistants and telemetry platforms.
          </p>
          <p>
            Rather than isolated code snippets, I care about end-to-end execution: how models behave under user interaction, how data is parsed, and how algorithms produce tangible value.
          </p>
        </div>
      </div>

      {/* Clean typographic line underneath (No cards) */}
      <div className="pt-8 border-t border-[#E8E8E3]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-[#171717]">
          {capabilities.map((cap, idx) => (
            <React.Fragment key={cap}>
              <span>{cap}</span>
              {idx < capabilities.length - 1 && (
                <span className="text-[#D8D8D3]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

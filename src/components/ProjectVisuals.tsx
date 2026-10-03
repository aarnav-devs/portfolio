import React from 'react';
import { ArrowRight, Check, Mic, Terminal, Activity, Compass, Cpu, HelpCircle } from 'lucide-react';

export const EchoLearnVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-5 sm:p-6 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E3] text-xs font-mono text-[#666666] mb-4">
        <div className="flex items-center gap-2">
          <Mic className="w-3.5 h-3.5 text-[#171717]" />
          <span>Voice-Based AI Tutoring Loop · Gemma + ChromaDB</span>
        </div>
        <span className="text-[#171717]">Spoken Dialogue</span>
      </div>

      <div className="space-y-3.5 text-xs sm:text-[13px]">
        {/* Student Spoken Audio Input */}
        <div className="flex items-start gap-3">
          <div className="font-mono text-[#666666] text-xs shrink-0 mt-0.5 flex items-center gap-1">
            <span>STUDENT [VOICE]</span>
          </div>
          <div className="bg-[#F4F5F2] p-3 rounded-md text-[#171717] flex-1 leading-relaxed">
            <div className="text-[11px] font-mono text-[#666666] mb-1">Speech Transcription:</div>
            "Gradient descent calculates the slope, but how does backpropagation propagate errors across multiple hidden layers?"
          </div>
        </div>

        {/* AI Voice Socratic Response */}
        <div className="flex items-start gap-3">
          <div className="font-mono text-[#171717] font-semibold text-xs shrink-0 mt-0.5 flex items-center gap-1">
            <span>TUTOR [SPEECH]</span>
          </div>
          <div className="border border-[#E8E8E3] bg-white p-3 rounded-md text-[#171717] flex-1 space-y-2 leading-relaxed">
            <div className="text-[11px] font-mono text-[#666666]">Synthesized Spoken Response:</div>
            <p>
              "It applies the multivariate chain rule from the loss function backwards. Let's test this aloud: if an activation function saturates with a near-zero derivative, what happens to the gradients upstream?"
            </p>
            <div className="pt-2 border-t border-[#E8E8E3] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#666666]">
              <span>ChromaDB Context: Loss Chain Rule</span>
              <span className="text-[#171717]">Verbal Gap Detected: Vanishing Gradient Effect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FitclikVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-5 sm:p-6 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E3] text-xs font-mono text-[#666666] mb-4">
        <span>Route Telemetry & Running Analytics</span>
        <span className="text-[#171717]">GPS Verified</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-[#E8E8E3]">
        <div>
          <span className="text-[11px] font-mono text-[#666666] block">DISTANCE</span>
          <span className="text-lg font-semibold text-[#171717] font-mono">8.42 km</span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#666666] block">AVG PACE</span>
          <span className="text-lg font-semibold text-[#171717] font-mono">4:32 /km</span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#666666] block">TIME</span>
          <span className="text-lg font-semibold text-[#171717] font-mono">38:14</span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#666666] block">CADENCE</span>
          <span className="text-lg font-semibold text-[#171717] font-mono">172 spm</span>
        </div>
      </div>

      <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#666666]">
        <span className="font-mono">Pace splits: 1k 4:35 · 2k 4:30 · 3k 4:28 · 4k 4:31 · 5k 4:26</span>
        <span className="text-[#171717] font-medium">Nutrition balance: Logged</span>
      </div>
    </div>
  );
};

export const FridayVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-5 sm:p-6 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E3] text-xs font-mono text-[#666666] mb-4">
        <span>Desktop Speech-to-Intent Engine</span>
        <span className="text-[#171717]">Local Execution</span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-[#F4F5F2] rounded-md text-[#171717]">
          <span className="text-[#666666]">user@desktop: </span>
          <span>"Friday, summarize today's research notes and stage model checkpoints."</span>
        </div>

        <div className="p-3 border border-[#E8E8E3] rounded-md space-y-1.5 text-[#171717]">
          <div className="text-[#666666] text-[11px]">→ Intent Recognized: workspace.sync()</div>
          <div>✓ Indexed 3 markdown files in /research/notes</div>
          <div>✓ Checkpointed weights to local storage</div>
          <div className="text-[11px] text-[#666666] pt-1">Audio confirmation synthesized (42ms latency)</div>
        </div>
      </div>
    </div>
  );
};

export const RoboSumoVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-4 text-xs font-mono text-left">
      <div className="flex justify-between pb-2 border-b border-[#E8E8E3] text-[#666666] mb-2">
        <span>Autonomous Edge Detection Loop</span>
        <span>IR Array</span>
      </div>
      <div className="space-y-1 text-[#171717]">
        <div>Ground Sensor Loop: 1.2ms cycle time</div>
        <div>Boundary: White line edge detected → differential reverse triggered</div>
        <div>Opponent Target: Ultrasonic sweep 180° locked</div>
      </div>
    </div>
  );
};

export const QueueVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-4 text-xs font-mono text-left">
      <div className="flex justify-between pb-2 border-b border-[#E8E8E3] text-[#666666] mb-2">
        <span>FIFO Service Flow Simulation</span>
        <span>M/M/1 Model</span>
      </div>
      <div className="flex items-center justify-between text-[#171717] pt-1">
        <span>Arrivals: λ = 14 req/sec</span>
        <span>Buffer: [ Q1 · Q2 · Q3 · Q4 ]</span>
        <span>Service: μ = 18 req/sec</span>
      </div>
    </div>
  );
};

export const HouseRateVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-4 text-xs font-mono text-left">
      <div className="flex justify-between pb-2 border-b border-[#E8E8E3] text-[#666666] mb-2">
        <span>Regression Valuation Pipeline</span>
        <span>Feature Vector</span>
      </div>
      <div className="space-y-1 text-[#171717]">
        <div>Features: Area (sq ft), Bed/Bath count, Location Index</div>
        <div>Model Output: Estimated Valuation ± Confidence Bounds</div>
      </div>
    </div>
  );
};

export const FarmXVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E8E3] rounded-lg p-4 text-xs font-mono text-left">
      <div className="flex justify-between pb-2 border-b border-[#E8E8E3] text-[#666666] mb-2">
        <span>Agricultural Telemetry</span>
        <span>Field Node 04</span>
      </div>
      <div className="flex justify-between text-[#171717] pt-1">
        <span>Soil Moisture: 48.2%</span>
        <span>Ambient: 24.6°C</span>
        <span>Advisory: Normal</span>
      </div>
    </div>
  );
};

export const MinimalVisual: React.FC<{ title: string; category: string }> = ({ title, category }) => {
  return (
    <div className="w-full bg-[#FAFAF8] border border-[#E8E8E3] rounded-lg p-3 text-xs font-mono text-[#666666] flex items-center justify-between text-left">
      <span>{title} Architecture</span>
      <span>{category}</span>
    </div>
  );
};

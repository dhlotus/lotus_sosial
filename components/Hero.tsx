
import React from 'react';
import { Terminal, ShieldCheck, Zap, Cpu, Code2, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-8 pb-12 md:pt-24 md:pb-28 px-4 overflow-hidden">
      {/* High-Tech Background Layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(45deg)',
            transformOrigin: 'center'
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent animate-scanline"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Status Bar - Structured */}
        <div className="w-full max-w-lg mb-6 md:mb-12 scale-[0.9] md:scale-100">
          <div className="flex items-center justify-between px-4 py-1.5 bg-gray-950/80 border border-gray-800 rounded-t-xl backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500 tracking-widest uppercase">
              <Terminal className="w-3 h-3" /> Bùi Đức Hà_v1.0.sh
            </div>
          </div>
          <div className="px-5 py-3 bg-gray-900/40 border-x border-b border-gray-800 rounded-b-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter font-black">Online</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 font-bold">
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> 1.2Ghz</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SSL</span>
            </div>
          </div>
        </div>

        {/* Main Brand Section */}
        <div className="relative mb-8 md:mb-10 flex flex-col items-center w-full">
          {/* Scientific Brackets */}
          <div className="hidden lg:block absolute -top-10 -left-20 w-32 h-32 border-l border-t border-blue-500/20 rounded-tl-3xl"></div>
          <div className="hidden lg:block absolute -bottom-10 -right-20 w-32 h-32 border-r border-b border-blue-500/20 rounded-br-3xl"></div>

          <div className="text-center w-full px-2">
            <div className="mb-4 inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[9px] md:text-[11px] font-black text-blue-400 tracking-[0.4em] uppercase animate-pulse">
              SOFTWARE DEVELOPMENT
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-black tracking-tighter leading-none relative group cursor-default">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-500 transition-all duration-700 group-hover:tracking-normal drop-shadow-2xl">
                LOTUS
              </span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-400/20 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </h1>
          </div>
        </div>

        {/* Dynamic Data Feed Section */}
        <div className="w-full max-w-3xl space-y-6 md:space-y-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-base md:text-2xl font-medium text-gray-400 max-w-2xl leading-relaxed text-center px-4">
              Nâng tầm thương hiệu với <span className="text-white font-black border-b-2 border-blue-500/50 pb-1"><br />LOTUS social network</span>
            </p>

            {/* Functional Status Chips */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 rounded-xl border border-gray-800 text-[9px] font-mono font-bold text-blue-400">
                <Zap className="w-3.5 h-3.5" /> FAST_LOAD
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 rounded-xl border border-gray-800 text-[9px] font-mono font-bold text-purple-400">
                <Code2 className="w-3.5 h-3.5" /> API_INTEGRATED
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 rounded-xl border border-gray-800 text-[9px] font-mono font-bold text-pink-400">
                <Activity className="w-3.5 h-3.5" /> REAL_TIME
              </div>
            </div>
          </div>

          {/* IT Divider */}
          <div className="relative h-px w-full max-w-xs md:max-w-md mx-auto bg-gradient-to-r from-transparent via-gray-800 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#020617] text-[7px] md:text-[8px] font-mono text-gray-600 tracking-[0.6em] uppercase whitespace-nowrap">
              LOTUS SOCIAL NETWORK
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

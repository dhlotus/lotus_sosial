
import React from 'react';
import { Platform } from '../types';

interface Props {
  active: Platform;
  onSelect: (p: Platform) => void;
  fbCount: number;
  ttCount: number;
}

const PlatformToggle: React.FC<Props> = ({ active, onSelect, fbCount, ttCount }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 px-2">
        <h2 className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 md:mb-0">
          Lựa chọn nền tảng
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 p-2 bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-gray-800/50 shadow-2xl">
        {/* Facebook Tab */}
        <button
          onClick={() => onSelect(Platform.FACEBOOK)}
          className={`relative group flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-4 rounded-[2rem] transition-all duration-500 overflow-hidden ${
            active === Platform.FACEBOOK
              ? 'bg-blue-600/10 border-blue-500/30'
              : 'hover:bg-gray-800/40 border-transparent'
          } border`}
        >
          {/* Active Indicator Glow */}
          {active === Platform.FACEBOOK && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] rounded-full"></div>
          )}
          
          <div className={`p-3 rounded-2xl transition-all duration-500 ${
            active === Platform.FACEBOOK ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'bg-gray-800 text-gray-400 group-hover:text-blue-400'
          }`}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          
          <div className="text-center sm:text-left">
            <div className={`font-black text-xl tracking-tight transition-colors ${active === Platform.FACEBOOK ? 'text-white' : 'text-gray-500'}`}>
              Facebook
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-widest ${active === Platform.FACEBOOK ? 'text-blue-400' : 'text-gray-600'}`}>
              {fbCount} Dịch vụ khả dụng
            </div>
          </div>
        </button>

        {/* TikTok Tab */}
        <button
          onClick={() => onSelect(Platform.TIKTOK)}
          className={`relative group flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-4 rounded-[2rem] transition-all duration-500 overflow-hidden ${
            active === Platform.TIKTOK
              ? 'bg-pink-600/10 border-pink-500/30'
              : 'hover:bg-gray-800/40 border-transparent'
          } border`}
        >
          {/* Active Indicator Glow */}
          {active === Platform.TIKTOK && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-pink-500 shadow-[0_0_15px_#ec4899] rounded-full"></div>
          )}
          
          <div className={`p-3 rounded-2xl transition-all duration-500 ${
            active === Platform.TIKTOK ? 'bg-[#FE2C55] shadow-[0_0_20px_rgba(254,44,85,0.4)] scale-110' : 'bg-gray-800 text-gray-400 group-hover:text-pink-400'
          }`}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.7.7 1.73 1.1 2.71 1.05 1.02-.01 2.03-.53 2.65-1.35.53-.7.79-1.57.78-2.45.02-4.48.01-8.96.01-13.44z"/>
            </svg>
          </div>
          
          <div className="text-center sm:text-left">
            <div className={`font-black text-xl tracking-tight transition-colors ${active === Platform.TIKTOK ? 'text-white' : 'text-gray-500'}`}>
              TikTok
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-widest ${active === Platform.TIKTOK ? 'text-pink-400' : 'text-gray-600'}`}>
              {ttCount} Dịch vụ khả dụng
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PlatformToggle;

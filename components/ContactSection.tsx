
import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="relative group px-2">
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative overflow-hidden bg-gray-950/90 backdrop-blur-2xl border border-blue-500/20 rounded-[2.5rem] p-8 md:p-12">
        {/* Tech Decor - Tiny Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left: Info Side */}
          <div className="text-center lg:text-left space-y-5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[9px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest font-black">Liên hệ để mua dịch vụ</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15]">
              Sẵn Sàng <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Nâng Cấp</span> Tài Khoản?
            </h2>

            <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed">
              Kết nối trực tiếp với <span className="text-blue-400 font-bold">LOTUS</span> qua cổng Zalo bảo mật để nhận báo giá ưu đãi và lộ trình tăng trưởng tối ưu nhất.
            </p>

            {/* Micro Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Giao dịch an toàn
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1">
                <Zap className="w-4 h-4 text-yellow-500" /> Hỗ trợ nhanh chóng
              </div>
            </div>
          </div>

          {/* Right: CTA Side */}
          <div className="w-full lg:w-auto flex flex-col gap-5 items-center">
            <a
              href="https://zalo.me/0763345812"
              target="_blank"
              className="group/btn relative w-full sm:w-[320px] lg:w-[340px] flex items-center justify-center gap-4 px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xl md:text-2xl transition-all hover:scale-[1.03] active:scale-95 shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-white/20" />
              <div className="flex flex-col items-start leading-none">
                <span className="uppercase tracking-widest">Zalo</span>
                <span className="text-[10px] font-mono text-blue-200 mt-1 opacity-60 uppercase tracking-tighter">Phương thức: Liên hệ</span>
              </div>
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
            </a>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gray-800"></div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] font-bold">Uptime: 99.9%</span>
              <div className="h-px w-8 bg-gray-800"></div>
            </div>
          </div>

        </div>

        {/* Decorative Technical Elements */}
        <div className="absolute top-0 right-0 p-6 opacity-30 hidden md:block">
          <div className="grid grid-cols-2 gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

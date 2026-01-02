
import React, { useState } from 'react';
import { QrCode, ShieldCheck, Copy, CheckCircle, CreditCard, ArrowRightLeft, Landmark } from 'lucide-react';

const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0332426909"; // Số tài khoản 

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative mt-20 md:mt-40 px-3 reveal">
      <div className="max-w-4xl mx-auto">
        {/* Main Tech Container */}
        <div className="relative overflow-hidden bg-gray-950/80 backdrop-blur-3xl border border-gray-800/40 rounded-[2.5rem] md:rounded-[4rem] p-5 md:p-12 shadow-2xl">

          {/* Ambient Lighting */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Section Header - Mobile Optimized */}
          <div className="flex flex-col items-center mb-8 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              <span className="text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Thanh toán</span>
            </div>
            <h3 className="text-2xl md:text-5xl font-black text-white text-center tracking-tight">
              Thanh Toán <span className="text-blue-500">Dịch Vụ</span>
            </h3>
            <p className="mt-2 text-gray-500 text-[10px] md:text-sm font-medium text-center max-w-[280px] md:max-w-md uppercase tracking-tight">
              Xử lý giao dịch qua cổng bảo mật 256-bit
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Left: QR Interaction Zone */}
            <div className="w-full lg:w-auto flex flex-col items-center shrink-0">
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative p-2.5 bg-gray-900/60 border border-gray-800 rounded-[2rem] backdrop-blur-sm">
                  {/* QR Image Wrapper */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 animate-scanline"></div>
                    <img
                      src="/lotus_sosial/img/QRCODEBANK.png"
                      alt="Bank QR Code"
                      className="w-full h-full object-contain p-1"
                    />
                    <div className="absolute inset-0 border-[6px] border-white/80 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>

                {/* QR Hint Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gray-950 border border-gray-800 rounded-full flex items-center gap-2 shadow-2xl">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[8px] font-black text-white uppercase tracking-widest whitespace-nowrap">QR CODE</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[8px] font-mono text-gray-700 uppercase tracking-[0.4em] font-bold">
                <ArrowRightLeft className="w-3 h-3" /> Secure_Protocol_V2
              </div>
            </div>

            {/* Right: Informational Modules - Optimized for Mobile Reading */}
            <div className="w-full flex-1 space-y-3 md:space-y-4">

              {/* Row 1: Bank & Holder (Grid on Desktop, Stack on Mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Bank */}
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl transition-all hover:bg-gray-800/50">
                  <div className="shrink-0 w-10 h-10 bg-white p-0 rounded-lg flex items-center justify-center shadow-inner">
                    <img
                      src="/lotus_sosial/img/mbbank-logo.png"
                      alt="MB Bank"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-[8px] font-mono text-gray-600 uppercase tracking-widest font-black mb-0.5">Ngân hàng</label>
                    <p className="text-white font-black text-xs md:text-sm truncate uppercase tracking-tight">MB Bank</p>
                  </div>
                </div>

                {/* Holder */}
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl transition-all hover:bg-gray-800/50">
                  <div className="shrink-0 p-2.5 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-500/20">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-[8px] font-mono text-gray-600 uppercase tracking-widest font-black mb-0.5">Tên tài khoản</label>
                    <p className="text-white font-black text-xs md:text-sm truncate uppercase tracking-tight">Bùi Đức Hà</p>
                  </div>
                </div>
              </div>

              {/* Row 2: Account Number (High Visibility & Interactive) */}
              <button
                onClick={handleCopy}
                className={`relative w-full group overflow-hidden p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all active:scale-[0.98] ${copied
                  ? 'bg-emerald-600/10 border-emerald-500/40'
                  : 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-600/10'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${copied ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white shadow-lg'}`}>
                      {copied ? <CheckCircle className="w-5 h-5" /> : <QrCode className="w-5 h-5" />}
                    </div>
                    <div className="text-left">
                      <label className={`block text-[8px] font-mono uppercase tracking-widest font-black mb-1 ${copied ? 'text-emerald-400' : 'text-blue-400'}`}>
                        {copied ? 'Đã sao chép số tài khoản' : 'Số tài khoản'}
                      </label>
                      <p className="text-white font-black text-xl md:text-3xl tracking-tighter tabular-nums leading-none">
                        {accountNumber}
                      </p>
                    </div>
                  </div>

                  <div className={`shrink-0 p-2.5 rounded-lg transition-all ${copied ? 'bg-emerald-500/20 text-emerald-500' : 'bg-gray-800 text-gray-400 group-hover:text-blue-400'}`}>
                    <Copy className="w-4 h-4" />
                  </div>
                </div>

                {/* Interactive Feedback Layer */}
                {copied && (
                  <div className="absolute inset-0 bg-emerald-500/5 flex items-center justify-center animate-pulse pointer-events-none">
                  </div>
                )}
              </button>

              {/* Security Hint */}
              <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tight leading-relaxed">
                    Nội dung chuyển: <span className="text-amber-500 font-black"> LOTUS [ Tên của bạn ] </span><br />Gửi minh chứng + dịch vụ mua qua Zalo. Hệ thống sẽ kích hoạt sau 1-5 phút.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Technical Logs */}
        <div className="mt-5 flex items-center justify-between px-6 opacity-30">
          <span className="text-[7px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">Latency: 12ms</span>
          <div className="flex gap-4">
            <span className="text-[7px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">V-SYNC: ON</span>
            <span className="text-[7px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">PAY_ID: {Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;


import React, { useState, useEffect } from 'react';
import {
  Users,
  ThumbsUp,
  Share2,
  MessageSquare,
  Video,
  Heart,
  Eye,
  ExternalLink,
  MessageCircle,
  Zap,
  ShieldCheck,
  Cpu,
  Globe,
  Facebook,
  Lock,
  Network,
  Database,
  Mail,
  Server,
  Terminal,
  Activity,
  Command,
  HeartHandshake
} from 'lucide-react';
import { Platform, Service } from './types';
import ServiceCard from './components/ServiceCard';
import PlatformToggle from './components/PlatformToggle';
import ContactSection from './components/ContactSection';
import PaymentSection from './components/PaymentSection';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>(Platform.FACEBOOK);

  // Intersection Observer for Reveal Effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activePlatform]);
  const facebookServices: Service[] = [
    { id: 'FB-CORE-001', name: 'Tăng Follow', description: 'Tăng lượt theo dõi profile và page, tốc độ cao, tăng độ uy tín của tài khoản.', icon: <Users className="w-6 h-6" />, status: 'active', priceInfo: '15k / 1.000' },
    { id: 'FB-INT-002', name: 'Tăng Like Bài Viết', description: 'Tăng lượt like bài viết, nâng cao chất lượng nội dung.', icon: <ThumbsUp className="w-6 h-6" />, status: 'active', priceInfo: '20k / 1.000' },
    { id: 'FB-DST-003', name: 'Tăng Share', description: 'Lan toả nội dung đến nhiều đối tượng hơn, mở rộng phạm vi hiển thị của bài viết.', icon: <Share2 className="w-6 h-6" />, status: 'active', priceInfo: '25k / 1.000' },
    { id: 'FB-ENG-004', name: 'Tăng Bình Luận', description: 'Tăng lượt tương tác với bài viết, thông qua hệ thống tương tác nhanh.', icon: <MessageSquare className="w-6 h-6" />, status: 'active', priceInfo: '500đ / 1 comment' },
    { id: 'FB-STRM-005', name: 'Tăng Mắt Live', description: 'Tăng số lượng người xem cho phiên live, thu hút đề xuất nội dung.', icon: <Video className="w-6 h-6" />, status: 'maintenance', priceInfo: '800đ / 1 mắt xem' },
  ];

  const tiktokServices: Service[] = [
    { id: 'TT-CORE-101', name: 'Tăng Follow', description: 'Tăng lượt theo dõi tài khoản tiktok, tốc độ lên nhanh.', icon: <Users className="w-6 h-6" />, status: 'active', priceInfo: '45K / 1.000 follow' },
    { id: 'TT-RCT-102', name: 'Tăng Tym Video', description: 'Tăng số lượt thả tym cho video, giúp đề xuất tốt hơn cho video', icon: <Heart className="w-6 h-6" />, status: 'active', priceInfo: '18K / 1.000 tym' },
    { id: 'TT-DST-103', name: 'Tăng Share', description: 'Mở rộng phạm vi hiển thị của video, tiếp cận được nhiều người xem hơn.', icon: <Share2 className="w-6 h-6" />, status: 'active', priceInfo: '10k / 1.000 lượt' },
    { id: 'TT-VW-104', name: 'Tăng View', description: 'Tăng số lượt xem , thúc đẩy tương tác và đề xuất cho video.', icon: <Eye className="w-6 h-6" />, status: 'active', priceInfo: '4K / 1.000 view' },
  ];

  const currentServices = activePlatform === Platform.FACEBOOK ? facebookServices : tiktokServices;

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden relative bg-[#020617]">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        {/* Platform Selector */}
        <div className="mb-12 md:mb-20">
          <PlatformToggle
            active={activePlatform}
            onSelect={setActivePlatform}
            fbCount={facebookServices.length}
            ttCount={tiktokServices.length}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-20 md:mb-32">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} platform={activePlatform} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="reveal">
          <ContactSection />
        </div>

        {/* Payment Section */}
        <PaymentSection />

        {/* Ecosystem Links - Restored & Modernized */}
        <div className="reveal mt-32 md:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

            {/* Website Module */}
            <a href="https://dhlotus.id.vn" target="_blank" className="group relative block p-8 bg-gray-900/40 border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-1">
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-blue-500 uppercase tracking-widest font-black">Website chính</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">dhlotus.id.vn</h4>
                  <p className="text-gray-500 text-xs font-medium">---LOTUS---</p>
                </div>
              </div>
            </a>

            {/* Facebook Module */}
            <a href="https://www.facebook.com/bdh.lotus" target="_blank" className="group relative block p-8 bg-gray-900/40 border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:-translate-y-1">
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-4 bg-blue-700/10 rounded-2xl border border-blue-600/20 group-hover:bg-blue-700 group-hover:text-white transition-all duration-500">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-blue-600 uppercase tracking-widest font-black">Facebook</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">Bùi Đức Hà</h4>
                  <p className="text-gray-500 text-xs font-medium">Liên hệ tài khoản cá nhân.</p>
                </div>
              </div>
            </a>

            {/* Email Module */}
            <a href="mailto:buiducha2K5@gail.com" className="group relative block p-8 bg-gray-900/40 border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-400/50 hover:-translate-y-1">
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700 group-hover:bg-blue-400 group-hover:text-gray-950 transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest font-black">Email</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">buiducha2k5@gmail.com</h4>
                  <p className="text-gray-500 text-xs font-medium">Hỗ trợ đối tác 24/7.</p>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Minimalist Signature Footer */}
        <footer className="mt-24 md:mt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-16"></div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              LOTUS
            </h2>

            <p className="text-gray-500 text-sm md:text-base font-medium max-w-lg leading-relaxed mb-12">
              Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của mình.
              Sự hài lòng của bạn là động lực lớn nhất để <span className="text-blue-500 font-bold">LOTUS</span> không ngừng hoàn thiện.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 py-1 px-3 bg-gray-950 border border-gray-900 rounded-full">
                <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] font-black">
                  DH_LOTUS
                </span>
              </div>

              <p className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">
                © {new Date().getFullYear()} — created by <span className="text-gray-500">LOTUS</span>
              </p>
            </div>

          </div>
        </footer>
      </main>

      {/* Floating Action Button */}
      <a
        href="https://zalo.me/0763345812"
        target="_blank"
        className="fixed bottom-6 right-6 z-[999] flex items-center justify-center p-4 bg-blue-600 text-white rounded-2xl shadow-2xl hover:bg-blue-500 transition-all hover:scale-110 active:scale-95 border border-white/10"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );

};

export default App;

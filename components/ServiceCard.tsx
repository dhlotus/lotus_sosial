
import React from 'react';
import { Service, Platform } from '../types';
import { CheckCircle2, AlertTriangle, Tag } from 'lucide-react';

interface Props {
  service: Service;
  platform: Platform;
}

const ServiceCard: React.FC<Props> = ({ service, platform }) => {
  const isMaintenance = service.status === 'maintenance';
  const isFacebook = platform === Platform.FACEBOOK;
  
  // Tailwind handles dynamic classes better with full names
  const accentColor = isFacebook ? 'text-blue-500' : 'text-pink-500';
  const accentBg = isFacebook ? 'bg-blue-500/10' : 'bg-pink-500/10';
  const accentBorder = isFacebook ? 'border-blue-500/20' : 'border-pink-500/20';
  const glowColor = isFacebook ? 'bg-blue-500/10' : 'bg-pink-500/10';

  return (
    <div className={`group relative p-6 rounded-3xl glass-card transition-all duration-500 hover:-translate-y-2 hover:bg-gray-800/80 flex flex-col h-full ${isMaintenance ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
      {/* Glow Effect */}
      <div className={`absolute inset-0 -z-10 ${glowColor} blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`}></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl ${accentBg} ${accentColor} group-hover:scale-110 transition-transform duration-300 border ${accentBorder}`}>
          {service.icon}
        </div>
        
        {isMaintenance ? (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-wider">
            <AlertTriangle className="w-3 h-3" /> Bảo trì
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-[10px] font-black uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3" /> Hoạt động
          </div>
        )}
      </div>

      <h3 className="text-xl font-extrabold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium flex-grow">
        {service.description}
      </p>

      {service.priceInfo && (
        <div className={`mb-2 p-3 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center gap-3 transition-all ${!isMaintenance ? `group-hover:border-${isFacebook ? 'blue' : 'pink'}-500/30` : ''}`}>
          <Tag className={`w-4 h-4 ${isMaintenance ? 'text-red-400' : accentColor}`} />
          <span className={`text-sm font-bold ${isMaintenance ? 'text-red-400' : accentColor}`}>
            {service.priceInfo}
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;

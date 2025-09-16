import * as React from "react";
import { SwiperSlider } from "@/components/SwiperSlider/SwiperSliderDynamic";

type OlympiadLeader = {
  id: number;
  name: string;
  subject: string;
  experience: string;
  description: string;
  color: string;
  bgGradient: string;
}

type OlympiadLeadersSliderProps = {
  leaders: OlympiadLeader[];
  className?: string;
  loop?: boolean;
}

const OlympiadLeaderCard: React.FC<{ leader: OlympiadLeader }> = ({ leader }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-3xl p-6 h-80 flex flex-col justify-between text-white transition-all duration-300 ${leader.bgGradient}`}
    >
      {/* Header with subject badge */}
      <div className="flex justify-between items-start">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${leader.color} bg-white/20 backdrop-blur-sm`}>
          {leader.subject}
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
        <p className="text-sm opacity-90 mb-3">{leader.experience}</p>
        <p className="text-xs leading-relaxed opacity-80">{leader.description}</p>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-between items-end">
        <div className="flex space-x-1 rtl:space-x-reverse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`}></div>
          ))}
        </div>
        <div className="text-right rtl:text-left">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <svg className="w-4 h-4 rtl:rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="20" r="15" fill="currentColor" />
          <circle cx="80" cy="50" r="12" fill="currentColor" />
          <circle cx="20" cy="80" r="10" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export const OlympiadLeadersSlider: React.FC<OlympiadLeadersSliderProps> = (props) => {
  const { leaders, className = "", loop = false } = props;

  return (
    <SwiperSlider
      className={className}
      itemsPerView={3}
      itemsPerViewTablet={2}
      itemsPerViewMobile={1}
      gap={24}
      loop={loop}
      enableMousewheel={true}
    >
      {leaders.map((leader) => (
        <OlympiadLeaderCard key={leader.id} leader={leader} />
      ))}
    </SwiperSlider>
  );
};

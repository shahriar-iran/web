"use client"

import React from 'react';
import { Memory } from '@/data/memoriesData';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface MemoriesSliderProps {
  memories: Memory[];
}

export const MemoriesSlider: React.FC<MemoriesSliderProps> = ({ memories }) => {
  return (
    <div className="w-full container mx-auto px-4">
      <Swiper
        modules={[FreeMode, Mousewheel]}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={{
          enabled: true,
          sticky: false,
          momentumRatio: 0.25,
          momentumVelocityRatio: 0.5,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        grabCursor={true}
        className="pb-4"
        dir="rtl"
      >
        {memories.map((memory) => (
          <SwiperSlide key={memory.id} className="!w-80">
            <Link
              href={`/memories/${memory.id}`}
              className="block group"
              draggable={false}
            >
              <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300">
                {/* عکس */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary/60 text-6xl">
                      📸
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-16" />
                </div>
                
                {/* عنوان */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    مشاهده خاطرات و تصاویر این سال
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* راهنما */}
      <div className="text-center mt-4">
        <p className="text-sm text-foreground/60">
          برای مشاهده بیشتر، موس را روی کارت‌ها بکشید یا از چرخ موس استفاده کنید
        </p>
      </div>
    </div>
  );
};
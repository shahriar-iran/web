"use client";

import React from 'react';

type SwiperSliderProps = {
  children: React.ReactNode[];
  className?: string;
  itemsPerView?: number;
  itemsPerViewTablet?: number;
  itemsPerViewMobile?: number;
  gap?: number;
  loop?: boolean;
  enableMousewheel?: boolean;
};

export const SwiperSlider: React.FC<SwiperSliderProps> = (props) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    const { children, className, itemsPerView = 3 } = props;
    return (
      <div className={`w-full ${className}`}>
        <div className="flex gap-6 animate-pulse">
          {children.slice(0, itemsPerView).map((child, i) => (
            <div key={i} className="flex-1 min-h-64 bg-gray-200 rounded-lg opacity-50"></div>
          ))}
        </div>
      </div>
    );
  }

  // Dynamic import فقط بعد از mount
  const SwiperComponent = React.lazy(() => import('@/components/SwiperSlider/SwiperSliderClient'));

  return (
    <React.Suspense fallback={
      <div className="w-full">
        <div className="flex gap-6 animate-pulse">
          {props.children.slice(0, props.itemsPerView || 3).map((child, i) => (
            <div key={i} className="flex-1 min-h-64 bg-gray-200 rounded-lg opacity-50"></div>
          ))}
        </div>
      </div>
    }>
      <SwiperComponent {...props} />
    </React.Suspense>
  );
};

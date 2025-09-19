"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type SwiperSliderProps = {
  children: React.ReactNode[];
  className?: string;
  itemsPerView?: number;
  itemsPerViewTablet?: number;
  itemsPerViewMobile?: number;
  gap?: number;
  loop?: boolean;
  enableMousewheel?: boolean;
  centeredSlides?: boolean;
  onSwiperInit?: (swiper: any) => void;
  onSlideChange?: (index: number) => void;

};

export const SwiperSlider: React.FC<SwiperSliderProps> = (props) => {
  const {
    children,
    className = "",
    itemsPerView = 3,
    itemsPerViewTablet = 2,
    itemsPerViewMobile = 1,
    gap = 24,
    loop = false,
    enableMousewheel = true,
    centeredSlides = false,
    onSwiperInit,
    onSlideChange,
  } = props;

  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = React.useState(itemsPerView);
  
  // محاسبه تعداد اسلایدهای قابل کنترل
  const totalControlSlides = React.useMemo(() => {
    if (children.length <= currentItemsPerView) {
      return 1; // فقط یک صفحه
    }
    return children.length - currentItemsPerView + 1;
  }, [children.length, currentItemsPerView]);

  // اطمینان از mount شدن کامپوننت
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // تشخیص سایز فعلی صفحه
  React.useEffect(() => {
    if (!isMounted) return;

    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentItemsPerView(itemsPerViewMobile);
      } else if (width < 1024) {
        setCurrentItemsPerView(itemsPerViewTablet);
      } else {
        setCurrentItemsPerView(itemsPerView);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerView, itemsPerViewTablet, itemsPerViewMobile, isMounted]);

  const handleNext = React.useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  // نمایش placeholder تا زمان mount شدن
  if (!isMounted) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex gap-6 overflow-hidden">
          {children.slice(0, itemsPerView).map((child, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
              {child}
            </div>
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={gap}
        slidesPerView={itemsPerView}
        loop={loop}
        centeredSlides={centeredSlides}
        mousewheel={{
          enabled: enableMousewheel,
          forceToAxis: true, // فقط در جهت اسلایدر کار کنه
          sensitivity: 0.5, // حساسیت کمتر
        }}
        breakpoints={{
          320: {
            slidesPerView: itemsPerViewMobile,
            spaceBetween: gap / 2,
          },
          768: {
            slidesPerView: itemsPerViewTablet,
            spaceBetween: gap * 0.75,
          },
          1024: {
            slidesPerView: itemsPerView,
            spaceBetween: gap,
          },
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          if (onSwiperInit) {
            onSwiperInit(swiper);
          }
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
          if (onSlideChange) {
            onSlideChange(swiper.activeIndex);
          }
        }}
        className="olympiad-slider"
        dir="rtl" // RTL support
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="h-auto">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      

    </div>
  );
};

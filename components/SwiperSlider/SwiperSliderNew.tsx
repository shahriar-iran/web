"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";

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
  } = props;

  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = React.useState(itemsPerView);
  
  // محاسبه تعداد اسلایدهای قابل کنترل
  const totalControlSlides = React.useMemo(() => {
    if (children.length <= currentItemsPerView) {
      return 1;
    }
    return children.length - currentItemsPerView + 1;
  }, [children.length, currentItemsPerView]);

  const handleNext = React.useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  // تشخیص سایز فعلی صفحه
  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentItemsPerView(itemsPerViewMobile);
      } else if (width < 1024) {
        setCurrentItemsPerView(itemsPerViewTablet);
      } else {
        setCurrentItemsPerView(itemsPerView);
      }
    };

    // تاخیر کوتاه برای جلوگیری از hydration mismatch
    const timer = setTimeout(updateItemsPerView, 0);
    
    window.addEventListener('resize', updateItemsPerView);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, [itemsPerView, itemsPerViewTablet, itemsPerViewMobile]);

  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={gap}
        slidesPerView={1} // شروع با 1 تا مشکل لود نداشته باشیم
        loop={loop}
        mousewheel={{
          enabled: enableMousewheel,
          forceToAxis: true,
          sensitivity: 0.5,
        }}
        breakpoints={{
          0: {
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
          // force update بعد از لود
          setTimeout(() => {
            swiper.update();
          }, 100);
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        className="olympiad-slider !pb-0 !opacity-0 transition-opacity duration-300" // شروع با opacity 0
        style={{
          '--swiper-theme-color': '#3b82f6',
        } as React.CSSProperties}
        dir="rtl"
        observer={true}
        observeParents={true}
        watchSlidesProgress={true}
        updateOnWindowResize={true}
        onAfterInit={(swiper) => {
          // بعد از init کامل، نمایش بده
          setTimeout(() => {
            const swiperEl = swiper.el as HTMLElement;
            swiperEl.style.opacity = '1';
          }, 50);
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="h-auto">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* استفاده از SliderThumbs خودی */}
      {totalControlSlides > 1 && (
        <div className="flex justify-end mt-6">
          <SliderThumbs
            count={totalControlSlides}
            active={currentSlide}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  );
};

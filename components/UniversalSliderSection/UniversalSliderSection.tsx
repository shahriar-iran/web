"use client";

import * as React from "react";
import { SwiperSlider } from "@/components/SwiperSlider/SwiperSlider";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";

// Props اصلی
type UniversalSliderSectionProps = {
  // محتوای اصلی - children به جای CardComponent
  children: React.ReactNode;
  
  // تنظیمات PageTitle
  title: string;
  description: string;
  titleVariant?: "side" | "centered";
  
  // تنظیمات اسلایدر
  itemsPerView?: number;
  itemsPerViewTablet?: number;
  itemsPerViewMobile?: number;
  gap?: number;
  loop?: boolean;
  enableMousewheel?: boolean;
  centeredSlides?: boolean;
  
  // استایل
  className?: string;
  hasBackground?: boolean;
  backgroundClass?: string;
  
  // تنظیمات SliderThumbs  
  showSliderThumbs?: boolean;
  slideCount?: number; // تعداد اسلایدها برای محاسبه thumbs
  
  // External control
  onSwiperInit?: (swiper: any) => void;
}

export const UniversalSliderSection: React.FC<UniversalSliderSectionProps> = (props) => {
  const {
    children,
    title,
    description,
    titleVariant = "side",
    itemsPerView = 3,
    itemsPerViewTablet = 2,
    itemsPerViewMobile = 1,
    gap = 12,
    loop = false,
    enableMousewheel = true,
    centeredSlides = false,
    className = "",
    hasBackground = true,
    backgroundClass = "bg-primary-50",
    showSliderThumbs = true,
    slideCount = 0,
    onSwiperInit
  } = props;

  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = React.useState(itemsPerView);
  
  // Handle external swiper initialization
  const handleSwiperInit = React.useCallback((swiper: any) => {
    setSwiperInstance(swiper);
    onSwiperInit?.(swiper);
  }, [onSwiperInit]);
  
  // محاسبه تعداد اسلایدهای قابل کنترل
  const totalControlSlides = React.useMemo(() => {
    if (slideCount <= currentItemsPerView) {
      return 1;
    }
    return slideCount - currentItemsPerView + 1;
  }, [slideCount, currentItemsPerView]);

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

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerView, itemsPerViewTablet, itemsPerViewMobile]);

  return (
    <div className={`flex flex-col gap-3 items-center w-full ${className}`}>
      {/* Header با PageTitle و SliderThumbs */}
      <div className="w-full max-w-7xl mx-auto px-3">
        <div className="flex w-full justify-between items-start gap-4">
          <PageTitle
            variant={titleVariant}
            title={title}
            description={description}
          />
          
          {/* Slider Thumbs کنار PageTitle */}
          {showSliderThumbs && totalControlSlides > 1 && (
            <div className="flex-shrink-0">
              <SliderThumbs
                count={totalControlSlides}
                active={currentSlide}
                handleNext={handleNext}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Slider Section */}
      <div className={`w-full py-4 ${hasBackground ? backgroundClass : ""}`}>
        <div className="w-full max-w-7xl px-2 2xl:px-0 mx-auto">
          <SwiperSlider
            itemsPerView={itemsPerView}
            itemsPerViewTablet={itemsPerViewTablet}
            itemsPerViewMobile={itemsPerViewMobile}
            gap={gap}
            loop={loop}
            enableMousewheel={enableMousewheel}
            centeredSlides={centeredSlides}
            onSwiperInit={handleSwiperInit}
            onSlideChange={setCurrentSlide}
          >
            {React.Children.toArray(children)}
          </SwiperSlider>
        </div>
      </div>
    </div>
  );
};

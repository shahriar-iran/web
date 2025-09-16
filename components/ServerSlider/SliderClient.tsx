"use client";

import * as React from "react";
import { SliderThumbs } from "@/components/SliderThumbs/SliderThumbs";

type SliderClientPropsType = {
  children: React.ReactNode[];
  className?: string;
  itemsPerView?: number;
  itemsPerViewTablet?: number;
  itemsPerViewMobile?: number;
  gap?: string;
  totalItems: number;
  loop?: boolean;
}

export const SliderClient: React.FC<SliderClientPropsType> = (props) => {
  const {
    children,
    className = "",
    itemsPerView = 3,
    itemsPerViewTablet = 2,
    itemsPerViewMobile = 1,
    gap = "1.5rem",
    totalItems,
    loop = false
  } = props;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [screenSize, setScreenSize] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0);
  const [dragStart, setDragStart] = React.useState({ x: 0, index: 0 });
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Detect screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getCurrentItemsPerView = () => {
    switch (screenSize) {
      case 'mobile': return itemsPerViewMobile;
      case 'tablet': return itemsPerViewTablet;
      default: return itemsPerView;
    }
  };

  const currentItemsPerView = getCurrentItemsPerView();
  const totalSlides = Math.ceil(totalItems / currentItemsPerView);

  // Reset currentIndex if it's out of bounds after screen size change
  React.useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentIndex]);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return (prev + 1) % totalSlides;
      } else {
        return prev < totalSlides - 1 ? prev + 1 : prev;
      }
    });
  }, [totalSlides, loop]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return (prev - 1 + totalSlides) % totalSlides;
      } else {
        return prev > 0 ? prev - 1 : prev;
      }
    });
  }, [totalSlides, loop]);

  // محاسبه عرض هر اسلاید
  const getSlideWidth = React.useCallback(() => {
    if (!containerRef.current) return 300;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = 24; // 1.5rem = 24px
    
    switch (screenSize) {
      case 'mobile':
        return containerWidth;
      case 'tablet':
        return (containerWidth - gap) / 2;
      default:
        return (containerWidth - gap * 2) / 3;
    }
  }, [screenSize]);

  // تشخیص RTL از document direction
  const isRTL = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.dir === 'rtl' || 
             document.body.dir === 'rtl' || 
             getComputedStyle(document.documentElement).direction === 'rtl';
    }
    return false;
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, index: currentIndex });
    setDragOffset(0);
  };

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const deltaX = e.clientX - dragStart.x;
    // جهت طبیعی: راست = مثبت، چپ = منفی
    setDragOffset(deltaX);
  }, [isDragging, dragStart.x]);

  const handleMouseUp = React.useCallback(() => {
    if (!isDragging) return;
    
    const slideWidth = getSlideWidth();
    const threshold = slideWidth * 0.3; // 30% از عرض اسلاید
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // درگ به راست = اسلاید بعدی
        handleNext();
      } else {
        // درگ به چپ = اسلاید قبلی  
        handlePrev();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, getSlideWidth, handleNext, handlePrev]);

  // Touch handlers برای موبایل
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, index: currentIndex });
    setDragOffset(0);
  };

  const handleTouchMove = React.useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - dragStart.x;
    // جهت طبیعی برای touch هم
    setDragOffset(deltaX);
  }, [isDragging, dragStart.x]);

  const handleTouchEnd = React.useCallback(() => {
    if (!isDragging) return;
    
    const slideWidth = getSlideWidth();
    const threshold = slideWidth * 0.2; // 20% برای موبایل
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // راست = بعدی
        handleNext();
      } else {
        // چپ = قبلی
        handlePrev();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, getSlideWidth, handleNext, handlePrev]);

  // Wheel handler برای touchpad و موس با throttling
  const handleWheel = React.useCallback((e: WheelEvent) => {
    // جلوگیری از تکرار سریع
    if (wheelTimeoutRef.current) return;
    
    // اگه حرکت افقی داشته باشیم (حتی کم)
    if (Math.abs(e.deltaX) > 5) {
      e.preventDefault();
      
      const threshold = 10; // حساسیت بیشتر برای تشخیص بهتر
      const delta = e.deltaX;
      
      if (Math.abs(delta) > threshold) {
        if (delta > 0) {
          // اسکرول به راست = اسلاید قبلی (touchpad معکوس)
          handlePrev();
        } else {
          // اسکرول به چپ = اسلاید بعدی (touchpad معکوس)
          handleNext();
        }
        
        // تاخیر برای جلوگیری از scroll سریع
        wheelTimeoutRef.current = setTimeout(() => {
          wheelTimeoutRef.current = null;
        }, 300);
      }
    }
    // اگه فقط حرکت عمودی باشه، اسکرول عادی صفحه کار کنه
  }, [handleNext, handlePrev]);

  // Event listeners
  React.useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      // اضافه کردن wheel listener
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }
      
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = null;
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd, handleWheel]);

  // محاسبه transform برای اسلایدر
  const getTransform = React.useCallback(() => {
    if (!containerRef.current) return 0;
    
    const slideWidth = getSlideWidth();
    const gap = 24; // 1.5rem
    const slideWithGap = slideWidth + gap;
    
    // در RTL جهت حرکت معکوس است
    const direction = isRTL ? 1 : -1;
    const baseTranslate = direction * currentIndex * slideWithGap;
    const dragTranslate = isDragging ? dragOffset : 0;
    
    // محدود کردن درگ در مرزها
    const maxTranslate = isRTL ? (totalSlides - 1) * slideWithGap : 0;
    const minTranslate = isRTL ? 0 : -(totalSlides - 1) * slideWithGap;
    const totalTranslate = baseTranslate + dragTranslate;
    
    // اگر خارج از محدوده باشه، مقاومت اضافه کن
    if (isRTL) {
      if (totalTranslate > maxTranslate) {
        return maxTranslate + (totalTranslate - maxTranslate) * 0.3;
      }
      if (totalTranslate < minTranslate) {
        return minTranslate + (totalTranslate - minTranslate) * 0.3;
      }
    } else {
      if (totalTranslate > maxTranslate) {
        return maxTranslate + (totalTranslate - maxTranslate) * 0.3;
      }
      if (totalTranslate < minTranslate) {
        return minTranslate + (totalTranslate - minTranslate) * 0.3;
      }
    }
    
    return totalTranslate;
  }, [currentIndex, getSlideWidth, isDragging, dragOffset, totalSlides, isRTL]);

  // تمام آیتم‌ها برای نمایش smooth
  const allItems = React.useMemo(() => {
    return children.map((child, index) => (
      <div 
        key={index} 
        className="flex-shrink-0"
        style={{ 
          width: screenSize === 'mobile' ? '100%' : 
                 screenSize === 'tablet' ? 'calc(50% - 0.75rem)' : 
                 'calc(33.333% - 1rem)' 
        }}
      >
        <div className="pointer-events-auto">
          {child}
        </div>
      </div>
    ));
  }, [children, screenSize]);

  return (
    <div className={`relative flex flex-col gap-6 w-full ${className}`}>
      {/* Slider Content */}
      <div 
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div 
          ref={sliderRef}
          className={`flex transition-transform ease-out ${isDragging ? 'duration-0' : 'duration-500'}`}
          style={{ 
            gap,
            transform: `translateX(${getTransform()}px)`
          }}
        >
          {allItems}
        </div>
      </div>

      {/* Drag indicator */}
      {isDragging && Math.abs(dragOffset) > 20 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm z-10 transition-opacity">
          {dragOffset > 0 ? 
            (currentIndex < totalSlides - 1 ? "اسلاید بعدی →" : "پایان لیست →") : 
            (currentIndex > 0 ? "← اسلاید قبلی" : "← شروع لیست")
          }
        </div>
      )}

      {/* Slider Controls - Only show if more than one slide */}
      {totalSlides > 1 && (
        <div className="flex justify-end">
          <SliderThumbs
            count={totalSlides}
            active={currentIndex}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  );
};

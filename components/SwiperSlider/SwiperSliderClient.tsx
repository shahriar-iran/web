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

const SwiperSliderClient: React.FC<SwiperSliderProps> = (props) => {
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
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={gap}
        slidesPerView={itemsPerView}
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
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        className="olympiad-slider"
        dir="rtl"
        observer={true}
        observeParents={true}
        watchSlidesProgress={true}
        updateOnWindowResize={true}
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

export default SwiperSliderClient;

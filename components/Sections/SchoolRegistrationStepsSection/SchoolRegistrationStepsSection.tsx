"use client"

import { UniversalSliderSection } from "@/components/UniversalSliderSection/UniversalSliderSection";
import { SchoolRegistrationStepCard } from "@/components/Cards/SchoolRegistrationStepCard/SchoolRegistrationStepCard";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';

interface SchoolRegistrationStep {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface SchoolRegistrationStepsSectionProps {
  steps: SchoolRegistrationStep[];
  showNavigation?: boolean;
}

export const SchoolRegistrationStepsSection: React.FC<SchoolRegistrationStepsSectionProps> = ({
  steps,
  showNavigation = false
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  return (
    <UniversalSliderSection
      title="مراحل ثبت‌نام در باشگاه المپیاد شهریار ایران"
      description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
      titleVariant="side"
      itemsPerView={1}
      itemsPerViewTablet={1}
      itemsPerViewMobile={1}
      gap={0}
      loop={false}
      enableMousewheel={false}
      hasBackground={true}
      backgroundClass="bg-primary-50"
      showSliderThumbs={true}
      slideCount={steps.length}
      centeredSlides={true}
      onSwiperInit={handleSwiperInit}
    >
      {steps.map((step, index) => (
        <SchoolRegistrationStepCard
          key={step.id}
          stepNumber={index + 1}
          title={step.title}
          description={step.description}
          icon={step.icon ? <Icon icon={step.icon} width={64} height={64} /> : undefined}
          image={step.image}
          showNavigation={showNavigation}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={index === 0}
          isLast={index === steps.length - 1}
          className="mx-4"
        />
      ))}
    </UniversalSliderSection>
  );
};

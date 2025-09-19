"use client"

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

interface SchoolRegistrationStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  showNavigation?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
}

export const SchoolRegistrationStepCard: React.FC<SchoolRegistrationStepCardProps> = ({
  stepNumber,
  title,
  description,
  icon,
  image,
  showNavigation = false,
  onNext,
  onPrevious,
  isFirst = false,
  isLast = false,
  className = ""
}) => {
  return (
    <div className={`w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center ${className}`}>
      {/* Step Number */}
      <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
        <span className="text-2xl font-bold text-primary">{stepNumber}</span>
      </div>

      {/* Icon or Image */}
      {image ? (
        <div className="mb-6">
          <img src={image} alt={title} className="w-24 h-24 object-contain" />
        </div>
      ) : icon ? (
        <div className="mb-6 text-primary">
          {icon}
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
        {description}
      </p>

      {/* Navigation Buttons */}
      {showNavigation && (
        <div className="flex items-center justify-center gap-4 mt-auto">
          {!isFirst && (
            <Button
              variant="bordered"
              color="primary"
              startContent={<Icon icon="solar:arrow-right-linear" className="rotate-180" width={20} />}
              onClick={onPrevious}
              className="min-w-[120px]"
              size="lg"
            >
              مرحله قبل
            </Button>
          )}
          
          {!isLast && (
            <Button
              variant="solid"
              color="primary"
              endContent={<Icon icon="solar:arrow-left-linear" width={20} />}
              onClick={onNext}
              className="min-w-[120px]"
              size="lg"
            >
              مرحله بعد
            </Button>
          )}
          
          {isLast && (
            <Button
              variant="solid"
              color="success"
              endContent={<Icon icon="solar:check-circle-bold" width={20} />}
              className="min-w-[120px]"
              size="lg"
            >
              تمام!
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

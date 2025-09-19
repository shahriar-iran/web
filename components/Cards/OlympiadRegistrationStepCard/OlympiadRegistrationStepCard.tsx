"use client"

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";



interface OlympiadRegistrationStepCardProps {
  stepNumber: number;
  stepTitle: string;
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

export const OlympiadRegistrationStepCard: React.FC<OlympiadRegistrationStepCardProps> = ({
  stepNumber,
  stepTitle,
  title,
  description,
  image,
  onNext,
  onPrevious,
  isFirst = false,
  isLast = false,
  className = ""
}) => {
  return (
    <div className={`w-full h-fit flex flex-row gap-4 flex-wrap ${className}`}>
        <div className="relative bg-primary w-full sm:w-80 h-full p-2 pb-8 shrink-0 rounded-t-3xl rounded-b-2xl overflow-hidden">
            <div className="relative bg-foreground w-full h-full flex items-center justify-center border border-white rounded-2xl overflow-hidden">
                <Image
                    src={`/static/assets/images/${image}`}
                    alt={title}
                    height={256}
                    width={320}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 text-white text-sm text-center left-0 bg-white/20 backdrop-blur-md p-2 rounded-b-[16px] rounded-t-3xl h-10 w-full">
                    {stepTitle}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center min-w-40 items-start gap-10 p-4 max-w-full flex-1">
            <h3 className="text-base font-bold text-foreground truncate w-full">
                {stepTitle} ثبت‌نام
            </h3>
            <div className="flex flex-col gap-2 items-start max-w-full w-full">
                <div className="flex flex-row gap-2 items-center truncate">
                    <div className="bg-foreground w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white">
                        {stepNumber}
                    </div>
                    <h3 className="text-sm font-bold text-primary">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-justify text-sm">
                    {description}
                </p>
            </div>
            {/* Navigation Buttons */}
            <div className="w-full flex items-center justify-end gap-4 pb-2">
                {!isFirst && (
                    <Button
                        variant="shadow"
                        color="primary"
                        startContent={<Icon icon="solar:arrow-right-linear" width={20} />}
                        onPress={onPrevious}
                        className="min-w-[120px]"
                        size="lg"
                    >
                        مرحله قبل
                    </Button>
                )}
                {!isLast && (
                    <Button
                        variant="shadow"
                        color="primary"
                        endContent={<Icon icon="solar:arrow-left-linear" width={20} />}
                        onPress={onNext}
                        className="min-w-[120px]"
                        size="lg"
                    >
                        مرحله بعد
                    </Button>
                )}
            </div>
        </div>
    </div>
  );
};

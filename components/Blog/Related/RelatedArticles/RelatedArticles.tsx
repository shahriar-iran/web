"use client";
import * as React from "react";
import { useState } from "react";

type RelatedArticlePropsType = {
    label: string | React.ReactNode;
    date: string | Date;
    duration: string;
};

export const RelatedArticle: React.FC<RelatedArticlePropsType> = ({
    label,
    date,
    duration,
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col gap-2 py-3 border-b last:border-none cursor-pointer transition-colors duration-200 ${
                isSelected ? "bg-blue-50" : "bg-white"
            }`}
        >
            <div
                className={`text-sm font-semibold hover:underline ${
                    isSelected ? "text-primary" : "text-primary/70"
                }`}
            >
                {label}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    {/* <CalendarIcon className="w-4 h-4" /> */}
                    <span>
                        {typeof date === "string"
                            ? date
                            : date.toLocaleDateString("fa-IR")}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    {/* <ClockIcon className="w-4 h-4" /> */}
                    <span>{duration} دقیقه مطالعه</span>
                </div>
            </div>
        </div>
    );
};

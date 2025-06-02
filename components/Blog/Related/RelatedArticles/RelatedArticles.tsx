"use client";
import * as React from "react";
import { useState } from "react";
import { Icon } from '@iconify/react';


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
            className={`flex flex-col gap-2 py-3 border-b last:border-none cursor-pointer transition-colors duration-200`}
        >
            <div
                className={`text-sm font-semibold`}
            >
                {label}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                <Icon icon="material-symbols-light/alarm-outline-rounded" width="24" height="24" />
                    <span className="text-foreground">
                        {typeof date === "string"
                            ? date
                            : date.toLocaleDateString("fa-IR")}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                <Icon icon="fluent:material-symbols-light/alarm-outline-rounded" width="24" height="24" />
                    <span className="text-foreground">{duration} دقیقه مطالعه</span>
                </div>
            </div>
        </div>
    );
};

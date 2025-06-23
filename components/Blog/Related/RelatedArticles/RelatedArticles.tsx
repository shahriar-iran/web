import * as React from "react";
import { Icon } from '@iconify/react';
import {Star} from "@/components/Vectors";
import Link from "next/link";


type RelatedArticlePropsType = {
    label: string | React.ReactNode;
    date: string | Date;
    duration: string;
    href?: string;
};

export const RelatedArticle: React.FC<RelatedArticlePropsType> = (props) => {

    const {
        label,
        date,
        duration,
        href
    } = props;

    return (
        <Link
            href={href || "#"}
            className={`flex flex-col gap-4 p-6 hover:bg-foreground/20 hover:transition-all duration-400`}
        >
            <div
                className={`text-sm font-semibold flex items-center truncate gap-2`}
            >
                <i className="text-primary flex">
                    <Star size={20}/>
                </i>
            {label}
            </div>
            <div className="flex items-center gap-6 text-xs text-foreground">
                <div className="flex items-center gap-2">
                <Icon icon="fluent:calendar-date-20-regular" width="24" height="24" />
                    <span className="text-foreground">
                        {typeof date === "string"
                            ? date
                            : date.toLocaleDateString("fa-IR")}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                <Icon icon="fluent:clock-alarm-32-regular" width="24" height="24" />
                    <span className="text-foreground">{duration} دقیقه مطالعه</span>
                </div>
            </div>
        </Link>
    );
};

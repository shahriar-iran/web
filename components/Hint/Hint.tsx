import * as React from 'react';
import clsx from 'clsx';
import {CometStar} from '@/components/Vectors';

interface HintProps {
    withStar?: boolean; 
    onlyStart?: boolean; 
    children?: React.ReactNode;
    className?: string;
    starClassName?: string;
    borderClassName?: string;
}

export const Hint: React.FC<HintProps> = ({
    withStar = false,
    onlyStart = false,
    children,
    className = '',
    starClassName = '',
    borderClassName = '',
}) => {
    return (
        <div
            className={clsx(
                "w-fit flex items-center rounded-xl px-6 py-2 gap-4 text-sm",
                "bg-primary/25",
                onlyStart ? "border-s-[10px] border-primary" 
                : "border-s-[10px] border-e-[10px] border-foreground",
                className
            )}
        >

            {(withStar) && (
                <span className={clsx("text-primary text-sm", starClassName)}>
                    <CometStar size={28}/>
                </span>
            )}
                
                
                <span className="text-inherit">{children}</span>

            {(withStar && !onlyStart) && (
                <span className={clsx("text-primary text-sm rotate-180", starClassName)}>
                    <CometStar size={28}/>
                </span>
            )}
        </div>
    );
};

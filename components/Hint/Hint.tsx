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
                "relative w-fit flex items-center overflow-hidden rounded-xl px-6 h-11 gap-4 text-sm bg-primary/25",
                className,
            )}
        >
           <div className={clsx("absolute right-0 h-full rounded-l-full w-2.5 bg-primary" , borderClassName)}/>
            {(withStar) && (
                <span className={clsx("text-primary text-sm", starClassName)}>
                    <CometStar size={28}/>
                </span>
            )}
                
            <div className="text-inherit">{children}</div>

            {(withStar && !onlyStart) && (
                <span className={clsx("text-primary text-sm rotate-180", starClassName)}>
                    <CometStar size={28}/>
                </span>
            )}

            {!onlyStart && (
                <div className={clsx("absolute left-0 h-full rounded-r-full w-2.5 bg-primary" , borderClassName)}/>
            )}
            
        </div>
    );
};

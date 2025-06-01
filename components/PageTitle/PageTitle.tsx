import * as React from "react"
import clsx from "clsx";
import {TextBackground, VerticalLine} from "@/components/Vectors";
import {CometStar} from "@/components/Vectors";



 


type TitlePropsType = {
    title: string;
    description: string;
    className?: string;
    starClassName?: string;
    bgClassName?: string;
    descriptionClassName?: string;
    variant?: "centered" | "side";
}



export const PageTitle: React.FC<TitlePropsType> = (props) => {


    const {
        className,
        title,
        description,
        starClassName,
        bgClassName,
        descriptionClassName,
        variant = "side"
    } = props;



    return (
        <div className={clsx("flex flex-col w-full justify-center gap-2", variant === "side" ? "items-start" : "items-center", className)}>
            <div className={clsx("flex flex-row justify-center items-center", variant === "side" ? "gap-2" : "gap-5")}>
                {variant === "centered" && (
                    <i className={clsx("text-primary", starClassName)}>
                        <CometStar size={20}/>
                    </i>
                )}
                {variant === "side" && (
                    <i className={clsx("text-primary", starClassName)}>
                        <VerticalLine size={32}/>
                    </i>
                )}
                <h1 className="font-black text-xl">
                    {title}
                </h1>
                {variant === "centered" && (
                    <i className={clsx("text-primary rotate-180", starClassName)}>
                        <CometStar size={20}/>
                    </i>
                )}
            </div>
            <div className="relative">
                <h2 className={clsx("relative z-10 text-center truncate font-bold", variant === "centered" ? "text-white" : "text-gray-500", descriptionClassName)}>
                    {description}
                </h2>
                {variant === "centered" && (
                    <i className={clsx("text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ", bgClassName)}>
                        <TextBackground/>
                    </i>
                )}
            </div>
        </div>
    
    )
}


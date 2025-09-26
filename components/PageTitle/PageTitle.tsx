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
        <div className={clsx("flex flex-col justify-center gap-2 max-w-full", variant === "side" ? "items-start" : "items-center", className)}>
            <div className={clsx("flex flex-row justify-center items-center z-10", variant === "side" ? "gap-2" : "gap-5")}>
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
                <h1 className={clsx("font-bold text-base md:font-black md:text-xl", variant === "centered" ? "text-center" : "text-start", )}>
                    {title}
                </h1>
                {variant === "centered" && (
                    <i className={clsx("text-primary rotate-180", starClassName)}>
                        <CometStar size={20}/>
                    </i>
                )}
            </div>
            <div className="relative w-fit max-w-full">
                <h2 className={clsx("relative max-w-full z-10 text-center truncate font-semibold text-xs md:font-bold md:text-sm", variant === "centered" ? "text-white px-5" : "text-gray-500", descriptionClassName)}>
                    {description}
                </h2>
                {variant === "centered" && (
                    <i className={clsx("fill-primary absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ", bgClassName)}>
                        <svg className="w-full h-7.5" preserveAspectRatio="none" viewBox="0 0 231 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.568359 11.6661C0.568359 5.40672 7.60404 1.72865 12.7438 5.30105V5.30105C14.0736 6.22535 15.838 6.22535 17.1678 5.30105L19.7516 3.50517C25.518 -0.502767 33.1685 -0.502766 38.9349 3.50517V3.50517C41.8181 5.50913 45.6433 5.50913 48.5265 3.50517V3.50517C54.2929 -0.502766 61.9434 -0.502766 67.7098 3.50517V3.50517C70.593 5.50913 74.4182 5.50913 77.3014 3.50517V3.50517C83.0678 -0.502766 90.7183 -0.502766 96.4847 3.50517V3.50517C99.3679 5.50913 103.193 5.50913 106.076 3.50517V3.50517C111.843 -0.502766 119.493 -0.502766 125.26 3.50517V3.50517C128.143 5.50913 131.968 5.50913 134.851 3.50517V3.50517C140.618 -0.502766 148.268 -0.502766 154.035 3.50517V3.50517C156.918 5.50913 160.743 5.50913 163.626 3.50517V3.50517C169.393 -0.502766 177.043 -0.502766 182.809 3.50517V3.50517C185.693 5.50913 189.518 5.50913 192.401 3.50517V3.50517C198.167 -0.502766 205.818 -0.502766 211.584 3.50517L214.168 5.30105C215.498 6.22535 217.262 6.22535 218.592 5.30105V5.30105C223.732 1.72865 230.768 5.40672 230.768 11.6661V14.0642C230.768 17.0133 229.324 19.7755 226.902 21.4587L221.176 25.4385C218.293 27.4425 214.468 27.4425 211.584 25.4385V25.4385C205.818 21.4306 198.167 21.4306 192.401 25.4385V25.4385C189.518 27.4425 185.693 27.4425 182.809 25.4385V25.4385C177.043 21.4306 169.393 21.4306 163.626 25.4385V25.4385C160.743 27.4425 156.918 27.4425 154.035 25.4385V25.4385C148.268 21.4306 140.618 21.4306 134.851 25.4385V25.4385C131.968 27.4425 128.143 27.4425 125.26 25.4385V25.4385C119.493 21.4306 111.843 21.4306 106.076 25.4385V25.4385C103.193 27.4425 99.3679 27.4425 96.4847 25.4385V25.4385C90.7183 21.4306 83.0678 21.4306 77.3014 25.4385V25.4385C74.4182 27.4425 70.593 27.4425 67.7098 25.4385V25.4385C61.9434 21.4306 54.2929 21.4306 48.5265 25.4385V25.4385C45.6433 27.4425 41.8181 27.4425 38.9349 25.4385V25.4385C33.1685 21.4306 25.518 21.4306 19.7516 25.4385V25.4385C16.8684 27.4425 13.0432 27.4425 10.16 25.4385L4.43398 21.4587C2.01237 19.7755 0.568359 17.0133 0.568359 14.0642V11.6661Z"/>
                        </svg>
                        {/* <TextBackground/> */}
                    </i>
                )}
            </div>
        </div>
    )
}


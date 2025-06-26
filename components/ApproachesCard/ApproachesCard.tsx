import * as React from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import { motion } from "framer-motion";

type ApproachesCardPropsType = {
    title: string;
    englishTitle: string;
    description?: string;
    icon: React.ReactNode;
    className?: string;
    isHovered?: boolean;
    setHovered?: () => void;
}



export const ApproachesCard: React.FC<ApproachesCardPropsType> = (props) => {


    const {
        title,
        englishTitle,
        description,
        icon,
        className,
        isHovered,
        setHovered,
    } = props;

    const variants = {
        default: {
            width: "17rem",
        },
        hovered: {
            width: "26rem",
        },
    };


    const variant = isHovered ? "wide" : "square"

    return (
        <motion.div
            initial={isHovered ? "hovered" : "default"}
            animate={isHovered ? "hovered" : "default"}
            variants={variants}
            transition={{ duration: 0.2 }}
            className={clsx(
                "relative select-none group/approaches rounded-3xl overflow-hidden shrink-0 h-60 text-secondary",
                className,
            )}
            onMouseEnter={setHovered}
        >
            {variant === "square" && (
                <div className="w-full h-fit top-0 absolute z-10">
                    <div className="relative max-h-28 flex items-start justify-center">
                        <svg className="max-h-28 shrink-0 w-[850px]" viewBox="0 0 703 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M703 0V39.7002H486V39.7139C480.807 39.7641 475.562 37.2406 472.582 31.5684C468.116 23.0658 456.977 20.7918 449.535 26.8633L439.34 35.1816C431.671 41.438 420.981 42.4357 412.287 37.707C399.896 30.9672 384.387 36.1218 378.496 48.9385L377.098 51.9814C367.282 73.3376 336.933 73.3376 327.117 51.9814L325.719 48.9385C319.828 36.1218 304.319 30.9672 291.928 37.707C283.234 42.4357 272.543 41.438 264.875 35.1816L254.68 26.8633C247.238 20.7918 236.099 23.0658 231.633 31.5684C228.42 37.6837 222.575 40.1395 217 39.6553V39.7002H0V0H703Z" fill="#22C197"/>
                        </svg>
                    </div>
                </div>
            )}
            <Card className="relative justify-center h-full text-[]" radius="none" shadow="none">
                <CardHeader className={clsx("pt-8 items-center", variant === "wide" ? "justify-between px-10" : "justify-center px-0")}>
                    <div className={clsx("rounded-3xl h-15 w-15 flex justify-center items-center", variant === "wide" ? "bg-primary shadow-md shadow-primary/40 text-white" : "bg-white")}>
                        {icon}
                    </div>
                    {(variant === "wide") && (
                        <div dir="ltr" className="max-w-72 relative flex items-center gap-2">
                            <svg height="16" viewBox="0 0 18 18" className="text-foreground" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.616699 9.45653C4.51122 8.77033 7.67476 5.92572 8.76941 2.12573L9.10198 0.971252L9.43455 2.12573C10.5292 5.92572 13.6927 8.77032 17.5873 9.45653C13.6927 10.1427 10.5292 12.9874 9.43455 16.7873L9.10198 17.9418L8.76941 16.7873C7.67476 12.9873 4.51122 10.1427 0.616699 9.45653Z" fill="currentColor"/>
                                <path d="M4.85889 9.45653C6.80615 9.11343 8.38792 7.69113 8.93524 5.79113L9.10153 5.21389L9.26781 5.79113C9.81514 7.69113 11.3969 9.11343 13.3442 9.45653C11.3969 9.79964 9.81514 11.2219 9.26781 13.1219L9.10153 13.6992L8.93524 13.1219C8.38792 11.2219 6.80615 9.79964 4.85889 9.45653Z" fill="white"/>
                            </svg>
                            <h6  className="relative text-2xl text-center font-medium text-primary truncate max-w-full py-1">{englishTitle}</h6>
                        </div>
                    )}
                </CardHeader>
                <CardBody className={clsx("py-4 overflow-hidden justify-center", variant === "wide" ? "items-start px-10" : "items-center px-0")}>
                    <div className={clsx("relative flex flex-col gap-3 ", variant === "wide" ? "w-full" : "min-w-48 max-w-56 items-center")}>
                        <h5 className="relative text-lg text-center font-bold text-foreground truncate max-w-full w-fit py-1">{title}</h5>
                        {variant === "square" && (
                            <svg 
                                className="w-full px-4"
                                viewBox="0 0 221 18" 
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path opacity="0.15" d="M9.14258 9.17773L212.859 9.17775" stroke="#151B32" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="8 8"/>
                                <path d="M203.873 9.17773C207.768 8.49153 210.931 5.64692 212.026 1.84693L212.358 0.692453L212.691 1.84693C213.786 5.64692 216.949 8.49153 220.844 9.17773C216.949 9.86394 213.786 12.7086 212.691 16.5085L212.358 17.663L212.026 16.5085C210.931 12.7086 207.768 9.86394 203.873 9.17773Z" fill="#2969FF"/>
                                <path d="M0.15625 9.17773C4.05077 8.49153 7.21431 5.64692 8.30896 1.84693L8.64153 0.692453L8.9741 1.84693C10.0688 5.64692 13.2323 8.49153 17.1268 9.17773C13.2323 9.86394 10.0688 12.7086 8.9741 16.5085L8.64153 17.663L8.30896 16.5085C7.21431 12.7086 4.05077 9.86394 0.15625 9.17773Z" fill="#2969FF"/>
                                <path d="M208.115 9.17773C210.062 8.83463 211.644 7.41233 212.192 5.51233L212.358 4.93509L212.524 5.51233C213.071 7.41233 214.653 8.83463 216.601 9.17773C214.653 9.52084 213.071 10.9431 212.524 12.8431L212.358 13.4204L212.192 12.8431C211.644 10.9431 210.062 9.52084 208.115 9.17773Z" fill="white"/>
                                <path d="M4.39844 9.17773C6.3457 8.83463 7.92747 7.41233 8.47479 5.51233L8.64108 4.93509L8.80736 5.51233C9.35469 7.41233 10.9365 8.83463 12.8837 9.17773C10.9365 9.52084 9.35469 10.9431 8.80736 12.8431L8.64108 13.4204L8.47479 12.8431C7.92747 10.9431 6.3457 9.52084 4.39844 9.17773Z" fill="white"/>
                            </svg>
                        )}
                        {variant === "wide" && (
                            <p className="text-justify text-foreground/50 min-h-[58px] max-h-[58px] line-clamp-2 leading-7">
                                {description || "توضیحی ثبت نشده است..."}
                            </p>
                        )}
                    </div>
                </CardBody>
                <CardFooter
                    className={clsx("px-0 pt-0 pb-8 items-center justify-center relative", variant === "wide" ? "after:bg-primary after:absolute after:bottom-0 after:h-3 after:w-full" : "")}
                >
                    {variant === "square" && (
                        <div className="min-w-48 max-w-56 relative before:absolute before:top-3.5 before:w-full before:h-[calc(100%-16px)] before:bg-primary-50">
                            <h6 dir="ltr" className="relative text-xl text-center font-medium text-primary truncate max-w-full py-1">{englishTitle}</h6>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}


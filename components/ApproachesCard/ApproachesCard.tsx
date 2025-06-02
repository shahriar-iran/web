import * as React from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";

type ApproachesCardPropsType = {
    title: string;
    englishTitle: string;
    description?: string;
    icon: React.ReactNode;
    className?: string;
    variant?: "wide" | "square";
}



export const ApproachesCard: React.FC<ApproachesCardPropsType> = (props) => {


    const {
        title,
        englishTitle,
        description,
        icon,
        className,
        variant = "square",
    } = props;


    return (
        <div 
            style={{
                clipPath: 
                variant === "square" 
                ? 'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
                : 'path("M456 0C469.255 0 480 10.7452 480 24V163.362C480 167.121 477.068 170.227 474.527 172.998C472.615 175.083 471.435 177.95 471.435 181.114C471.435 184.278 472.615 187.145 474.527 189.229C477.068 192 480 195.105 480 198.864V272C480 280.837 472.837 288 464 288H16C7.16345 288 2.16198e-07 280.837 0 272V198.864C0.00018967 195.105 2.93206 192 5.47266 189.229C7.38441 187.145 8.56527 184.279 8.56543 181.115C8.56543 177.951 7.38459 175.084 5.47266 172.999C2.93219 170.228 0 167.122 0 163.363V24C0 10.7452 10.7452 5.15438e-07 24 0H456Z")'
            }}
            className={clsx("relative group/approaches rounded-3xl overflow-hidden shrink-0 h-72 text-secondary", variant === "wide" ? "w-120" : "aspect-square", className)}
        >
            {variant === "square" && (
                <svg className="w-full top-0 absolute z-10" viewBox="0 0 270 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M245.5 0.282227C258.755 0.282227 269.5 11.0274 269.5 24.2822V39.79C264.124 40.0572 258.591 37.5838 255.472 31.7256C250.986 23.3031 239.943 21.0427 232.509 27.0254L222.242 35.2881C214.55 41.4784 203.902 42.4678 195.201 37.7998C182.755 31.1222 167.255 36.2784 161.289 49.0811L159.968 51.917C150.082 73.1318 119.918 73.1318 110.032 51.917L108.711 49.0811C102.745 36.2784 87.245 31.1222 74.7988 37.7998C66.0985 42.4678 55.4497 41.4784 47.7578 35.2881L37.4912 27.0254C30.0573 21.0427 19.0136 23.3031 14.5283 31.7256C11.4087 37.5838 5.87616 40.0572 0.5 39.79V24.2822C0.500001 11.0274 11.2452 0.282227 24.5 0.282227H245.5Z"/>
                </svg>
            )}
            <Card className="relative justify-center h-full text-[]" radius="none" shadow="none">
                <CardHeader className={clsx("pt-8 items-center", variant === "wide" ? "justify-between px-10" : "justify-center px-0")}>
                    <div className={clsx("rounded-3xl h-15 w-15 flex justify-center items-center", variant === "wide" ? "bg-primary shadow-md shadow-primary/40 text-white" : "bg-white")}>
                        {icon}
                    </div>
                    {(variant === "wide") && (
                        <div dir="ltr" className="max-w-72 relative flex items-center gap-2">
                            <svg width="32" height="32" viewBox="0 0 18 18" className="text-foreground" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.616699 9.45653C4.51122 8.77033 7.67476 5.92572 8.76941 2.12573L9.10198 0.971252L9.43455 2.12573C10.5292 5.92572 13.6927 8.77032 17.5873 9.45653C13.6927 10.1427 10.5292 12.9874 9.43455 16.7873L9.10198 17.9418L8.76941 16.7873C7.67476 12.9873 4.51122 10.1427 0.616699 9.45653Z" fill="currentColor"/>
                                <path d="M4.85889 9.45653C6.80615 9.11343 8.38792 7.69113 8.93524 5.79113L9.10153 5.21389L9.26781 5.79113C9.81514 7.69113 11.3969 9.11343 13.3442 9.45653C11.3969 9.79964 9.81514 11.2219 9.26781 13.1219L9.10153 13.6992L8.93524 13.1219C8.38792 11.2219 6.80615 9.79964 4.85889 9.45653Z" fill="white"/>
                            </svg>
                            <h6  className="relative text-2xl text-center font-medium text-primary truncate max-w-full py-1">{englishTitle}</h6>
                        </div>
                    )}
                </CardHeader>
                <CardBody className={clsx("py-4 overflow-hidden justify-center", variant === "wide" ? "items-start px-10" : "items-center px-0")}>
                    <div className={clsx("relative flex flex-col gap-3 ", variant === "wide" ? "w-full" : "min-w-48 max-w-56 items-center")}>
                        <h5 className="relative text-xl text-center font-bold text-foreground truncate max-w-full w-fit py-1">{title}</h5>
                        {variant === "square" && (
                            <svg 
                                className="w-full"
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
                            <h6 dir="ltr" className="relative text-2xl text-center font-medium text-primary truncate max-w-full py-1">{englishTitle}</h6>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}


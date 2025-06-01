import * as React from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";


type ApproachesCardPropsType = {
    title: string;
    englishTitle: string;
    icon: React.ReactNode;
    className?: string;
}



export const ApproachesCard: React.FC<ApproachesCardPropsType> = (props) => {


    const {
        title,
        englishTitle,
        icon,
        className,
    } = props;

    return (
        <div className={clsx("relative aspect-square h-72 text-secondary", className)}>
            <svg className="w-full top-0 absolute z-10" viewBox="0 0 270 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M245.5 0.282227C258.755 0.282227 269.5 11.0274 269.5 24.2822V39.79C264.124 40.0572 258.591 37.5838 255.472 31.7256C250.986 23.3031 239.943 21.0427 232.509 27.0254L222.242 35.2881C214.55 41.4784 203.902 42.4678 195.201 37.7998C182.755 31.1222 167.255 36.2784 161.289 49.0811L159.968 51.917C150.082 73.1318 119.918 73.1318 110.032 51.917L108.711 49.0811C102.745 36.2784 87.245 31.1222 74.7988 37.7998C66.0985 42.4678 55.4497 41.4784 47.7578 35.2881L37.4912 27.0254C30.0573 21.0427 19.0136 23.3031 14.5283 31.7256C11.4087 37.5838 5.87616 40.0572 0.5 39.79V24.2822C0.500001 11.0274 11.2452 0.282227 24.5 0.282227H245.5Z"/>
            </svg>  
            <Card className="relative rounded-3xl justify-center h-full text-[]" radius="none" shadow="none">
                <CardHeader className="px-0 pt-8 items-center justify-center">
                    <div className="bg-white rounded-2xl h-13 w-13 flex justify-center items-center">
                        {icon}
                    </div>
                </CardHeader>
                <CardBody className="px-0 py-4 items-center justify-center">
                    <div className="min-w-48 max-w-56 relative flex flex-col gap-3 items-center">
                        <h5 className="relative text-xl text-center font-bold text-foreground truncate max-w-full py-1">{title}</h5>
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
                    </div>
                </CardBody>
                <CardFooter className="px-0 pt-0 pb-8 items-center justify-center relative">
                    <div className="min-w-48 max-w-56 relative before:absolute before:top-3.5 before:w-full before:h-[calc(100%-16px)] before:bg-primary-50">
                        <h6 dir="ltr" className="relative text-2xl text-center font-medium text-primary truncate max-w-full py-1">{englishTitle}</h6>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}


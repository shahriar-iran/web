import * as React from "react"
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { ScrollShadow } from "@heroui/scroll-shadow";

type FeatureCardPropsType = {
    variant?: "";
    title: string;
    footerItems?: {
        icon: React.ReactNode;
        title: string;
        value: string;
    }[];
}



export const FeatureCard: React.FC<FeatureCardPropsType> = (props) => {


    const {
        variant,
        title,
        footerItems,
    } = props;

    return (
        <div className="relative m-2.5 w-fit h-fit before:rounded-3xl before:absolute before:bg-primary-100 before:w-full before:h-full before:z-0 before:-rotate-3">   
            <Card className="w-96 relative rounded-3xl" radius="none" shadow="none">
                <CardBody className="p-2 pb-0">
                    <Image
                        as={NextImage}
                        src="/static/assets/images/school-card.png" 
                        alt={title}
                        title={title}
                        width={256}
                        height={256}
                        className="!w-full !h-auto object-contain"
                        classNames={{wrapper: "!max-w-none"}}
                    />
                </CardBody>
                <CardFooter className="flex-col px-0 py-3 pb-10 gap-5 items-start w-full">
                    <div className="flex flex-row gap-1 px-5 items-start w-full max-w-full">
                        <svg width="18" height="18" viewBox="0 0 18 18" className="text-primary" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.616699 9.45653C4.51122 8.77033 7.67476 5.92572 8.76941 2.12573L9.10198 0.971252L9.43455 2.12573C10.5292 5.92572 13.6927 8.77032 17.5873 9.45653C13.6927 10.1427 10.5292 12.9874 9.43455 16.7873L9.10198 17.9418L8.76941 16.7873C7.67476 12.9873 4.51122 10.1427 0.616699 9.45653Z" fill="currentColor"/>
                            <path d="M4.85889 9.45653C6.80615 9.11343 8.38792 7.69113 8.93524 5.79113L9.10153 5.21389L9.26781 5.79113C9.81514 7.69113 11.3969 9.11343 13.3442 9.45653C11.3969 9.79964 9.81514 11.2219 9.26781 13.1219L9.10153 13.6992L8.93524 13.1219C8.38792 11.2219 6.80615 9.79964 4.85889 9.45653Z" fill="white"/>
                        </svg>
                        <h6 className="text-sm font-bold text-foreground truncate max-w-full">{title}</h6>
                    </div>
                    {!!footerItems?.length && (
                        <div className="flex flex-row gap-1 items-center bg-primary-50 py-3 w-full max-w-full">
                            <ScrollShadow
                                orientation="horizontal"
                                className="flex flex-row px-5 gap-5"
                                size={20}
                                hideScrollBar
                            >
                                {footerItems.map((item, index) => {
                                    return (
                                        <div key={index} className="shrink-0 flex flex-row gap-1 items-center">
                                            {item.icon}
                                            <span className="text-xs font-light text-primary">{item.title}</span>
                                            <span className="text-xs font-bold text-foreground">{item.value}</span>
                                        </div>
                                    )}
                                )}
                            </ScrollShadow>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}


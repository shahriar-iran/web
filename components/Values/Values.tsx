import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";


type ValuesPropsType = {
    variant: "wide" | "square";
    className?: string;
    titleEn: string;
    titleFa: string;
    icon: string | React.ReactNode;
    iamgeUrl?: string;
}



export const Values: React.FC<ValuesPropsType> = (props) => {
    const {
        variant,
        className,
        icon,
        titleEn,
        titleFa,
        iamgeUrl
    } = props;
    
    
    if ( variant === "wide") {
        return(
            <div
                className={clsx(
                    "relative rounded-3xl overflow-hidden w-[300px] h-[200px] border-2 border-blue-500",
                    className
                )}
            >
                {iamgeUrl && (
                    <img
                        src={iamgeUrl}
                        alt={titleFa}
                        className="w-full h-full object-cover"
                    />
                )}

                <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <p className="text-white text-sm font-medium">{titleFa}</p>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500 pointer-events-none" />
            </div>
        );
    }
    
    
    
    
    
    
    
    
    
    return(
        <div 
            style={{
                clipPath: 
                variant === "square" 
                ? 'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
                : ''
            }}
            className={clsx("relative group/values rounded-3xl overflow-hidden shrink-0 h-72 text-secondary", className)}
        >
            {/* {variant === "square" && (
                <svg className="w-full top-0 absolute z-10" viewBox="0 0 304 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.898 -40.2051L42.0593 -155.653L-16.7782 21.6217C-22.9103 40.0974 -0.241341 54.472 13.8553 41.0468V41.0468C22.3475 32.9591 36.1032 34.5975 42.458 44.4537L51.2345 58.0658C57.8099 68.2641 69.8478 73.54 81.8031 71.4635V71.4635C98.9056 68.4928 114.989 80.5083 116.991 97.7511L117.435 101.57C120.752 130.142 155.936 141.82 175.679 120.901L178.318 118.106C190.233 105.482 210.309 105.468 222.241 118.075V118.075C230.583 126.888 243.386 129.857 254.754 125.614L269.928 119.951C280.915 115.851 292.921 122.762 294.892 134.323V134.323C298.164 153.513 324.929 155.545 331.061 137.07L389.898 -40.2051Z"/>
                </svg>
            )} */}
            <Card className="relative justify-center h-full text-[]" radius="none" shadow="none">
                <CardHeader>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start w-full">
                            <Button
                            isIconOnly
                            className="bg-primary/10"
                            startContent={
                                <Icon icon="solar:arrow-left-line-duotone" width={24} height={24} className="-rotate-45 text-primary"/>
                            }
                            />
                        </div>
                        <span className="text-me font-bold text-foreground">
                            {titleEn}
                        </span>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex justify-between items-start w-full">
                        <div className="w-full max-w-45 text-foreground line-clamp-2 text-right mt-5">
                            {titleFa}
                        </div>
                        <div>
                            {icon}
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
    )
}
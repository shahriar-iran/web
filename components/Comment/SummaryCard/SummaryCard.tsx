import * as React from "react";
import { Avatar } from "@heroui/avatar";
import clsx from "clsx";
import {Star} from "@/components/Vectors";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

type SummaryCardType = {
    name: string | React.ReactNode;
    avatarUrl?: string;
    degree: string;
    date: string ;
    bgClassName?: string;
    starClassName?: string;
    className?: string;
};





export const SummaryCard: React.FC<SummaryCardType> = ({
    name,
    avatarUrl,
    date,
    degree,
    bgClassName,
    starClassName,
    className
}) => {
    return (
        <div
            // style={{
            //     clipPath: 'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
            // }}
            className={clsx("relative border-2 border-primary-100 hover:border-foreground transition duration-500 rounded-3xl overflow-hidden group/feature shrink-0 w-84", className)}
        >
            <Card className="w-full max-w-85 mx-auto flex relative rounded-2xl h-85 group-hover/feature:bg-">
          


            <CardHeader className="flex flex-col justify-center items-center">
                <Avatar
                src={avatarUrl}
                size="lg"
                />
                <h1 className="text-foreground truncate">
                    {name}
                </h1>
            </CardHeader>

            <CardBody className="flex flex-col gap-4 justify-center items-center">
                <div className={clsx(bgClassName , "px-2 py-3 w-full max-w-70 mx-auto")}>
                    {degree}
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                    <i className={clsx(starClassName)}>
                        <Star size={20}/>
                    </i>
                    <span className="text-foreground truncate">
                        {date}
                    </span>
                    <i className={clsx(starClassName)}>
                        <Star size={20}/>
                    </i>
                </div>
            </CardBody>


            <svg
                viewBox="0 0 269 36"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full bottom-0 absolute z-10"
            >
                <path
                d="M252.723 35.824C261.559 35.824 268.723 28.6605 268.723 19.824V17.9392C264.449 16.9451 259.762 17.4014 255.391 19.7468C249.733 22.7819 242.932 22.7819 237.274 19.7468L223.022 12.1003C214.051 7.28678 203.581 6.07559 193.747 8.71362L187.087 10.4998C177.253 13.1376 166.784 11.9264 157.812 7.11304L153.413 4.75269C141.602 -1.58427 127.402 -1.58427 115.591 4.75269L111.191 7.11304C102.22 11.9264 91.7506 13.1376 81.917 10.4998L75.2568 8.71362C65.4231 6.07559 54.9532 7.28678 45.9814 12.1003L31.7295 19.7468C26.0722 22.7819 19.2706 22.7819 13.6133 19.7468C9.14558 17.3498 4.34879 16.9274 0 18.0085V19.824C0 28.6605 7.16344 35.824 16 35.824H252.723Z"
                />
            </svg>



        </Card>
        </div>
        
    )
}
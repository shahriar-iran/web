import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";
import { Image } from "@heroui/image";
import NextImage from "next/image";





type XPropsType = {
    year: string;
    imageUrl: string;
}



export const X: React.FC<XPropsType> = (props) => {
    const {
        imageUrl,
        year,
    } = props;
    return(
        <div 
        style={{
            // clipPath:'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
        }}
        className={clsx("relative group/memory select-none rounded-3xl overflow-hidden shrink-0 h-72")}
    >
        <Card className="relative justify-center h-full p-0 bg-white transition duration-500 group-hover/memory:bg-primary" radius="none" shadow="none">
            <CardBody>
                <div className="flex flex-col h-full justify-between overflow-hidden">
                <div className="flex justify-end w-full">
                    <Button
                    isIconOnly
                        className="bg-foreground/5 backdrop-blur-md border-2 border-white"
                        endContent={
                            <Icon icon="solar:arrow-right-line-duotone" width="24" height="24" className="rotate-45"/>
                        }
                    />
                </div>
                <div className="w-full flex justify-between gap-1">
                    <div className="flex items-center">
                        <i className="text-primary group-hover/memory:text-foreground">
                            <Star size={24}/>
                        </i>
                        <div className="text-foreground text-sm group-hover/memory:text-white">
                        سال تحصیلی:
                        </div>
                    </div>
                    <span>
                        {year}
                    </span>
                </div>
                </div>

                {/* <div className="absolute">
                    <Image
                        as={NextImage}
                        alt="HeroUI hero Image"
                        src={imageUrl}
                        width={320}
                        height={320}
                        className="!w-full !h-full object-cover grayscale group-hover/box:grayscale-0 transition-all duration-500"
                        classNames={{wrapper: "!max-w-none w-full"}}
                    />
                </div> */}
            </CardBody>
        </Card>
    </div>
    )
}
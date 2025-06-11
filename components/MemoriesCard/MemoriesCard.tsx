import * as React from "react";
import clsx from "clsx";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";
import { Image } from "@heroui/image";
import NextImage from "next/image";


type MemoriesCardPropsType = {
    yearOfMemory: string;
    imageUrl: string;
}



export const MemoriesCard: React.FC<MemoriesCardPropsType> = (props) => {
    const {
        yearOfMemory,
        imageUrl
    } = props;
    return(
        <div 
        style={{
            // clipPath:'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
        }}
        className={clsx("relative group/memory select-none rounded-3xl overflow-hidden shrink-0 h-72 w-100 text-secondary")}
    >
        <Card 
            className="relative justify-center h-full p-0 bg-white transition duration-500 group-hover/memory:bg-primary" radius="none"
            shadow="none"
         >
                <svg
                    viewBox="0 0 304 146"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full top-0 left-0 absolute z-10 transition duration-500 fill-primary/10 group-hover/memory:fill-white"
                >
                    <path 
                        d="M304 146C299.685 143.472 296.321 139.145 295.29 133.12C293.318 121.593 281.303 114.701 270.307 118.789L255.122 124.436C243.744 128.666 230.93 125.706 222.582 116.919C210.641 104.348 190.549 104.362 178.625 116.949L175.984 119.737C156.226 140.594 121.013 128.95 117.693 100.462L117.25 96.6533C115.246 79.4606 99.1493 67.4805 82.0333 70.4425C70.0688 72.5129 58.0214 67.2515 51.4409 57.0829L42.6576 43.5111C36.2977 33.6835 22.5314 32.0495 14.0325 40.1138C9.7916 44.1378 4.77539 45.6553 0 45.3115V0H304V146Z"
                    />
                </svg>
            <CardBody className="overflow-hidden flex flex-col justify-between z-20">
                <Button
                    className="bg-primary/10 group-hover/memory:bg-foreground w-fit text-primary group-hover/memory:text-white"
                    endContent={
                        <Icon icon="solar:arrow-right-line-duotone" width="24" height="24" className="rotate-45 text-primary group-hover/memory:text-white"/>
                    }
                >
                    مشاهدۀ خاطرات
                </Button>
                <div className="flex flex-col gap-2 justify-center w-fit">
                    <div className="flex items-center gap-1">
                        <i className="text-primary group-hover/memory:text-foreground">
                            <Star size={24}/>
                        </i>
                        <span className="text-sm text-foreground group-hover/memory:text-white">
                        سال تحصیلی
                        </span>
                    </div>
                    <span className="font-semibold text-foreground group-hover/memory:text-white">
                        {yearOfMemory}
                    </span>
                </div>
                <div className="absolute left-0 w-2/3">
                    <Image
                        as={NextImage}
                        alt="HeroUI hero Image"
                        src={imageUrl}
                        width={320}
                        height={320}
                        className="!w-full !h-full object-cover"
                        classNames={{wrapper: "!max-w-none w-full"}}
                    />
                </div>
            </CardBody>
            
        </Card>   
    </div>
    )
}

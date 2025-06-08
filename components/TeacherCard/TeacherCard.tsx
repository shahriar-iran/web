import * as React from "react";
import clsx from "clsx";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import {Card , CardBody, CardFooter, CardHeader} from "@heroui/card"
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";

type TeacherCardPropsType = {
    masterName: string;
    topicName: string;
    experience: string;
    description: string;
    variant?: "wide" | "square";
    className?: string;
    image: string;
}



export const TeacherCard: React.FC<TeacherCardPropsType> = (props) => {
    
    const {
        variant,
        className,
        description,
        experience,
        masterName,
        topicName,
        image
    } = props;

    return(
    <div
        style={{
            clipPath: 
            variant === "square" 
            ? 'path("M288 163.362C288 167.121 285.068 170.227 282.528 172.998C280.616 175.083 279.435 177.95 279.435 181.114C279.435 184.278 280.615 187.145 282.528 189.23C285.068 192 288 195.106 288 198.865V272C288 280.837 280.837 288 272 288H16C7.16345 288 0 280.837 0 272V198.865C0 195.106 2.93188 192 5.47256 189.23C7.38441 187.145 8.56492 184.279 8.56506 181.115C8.56506 177.951 7.38449 175.084 5.47242 172.999C2.93195 170.228 0 167.122 0 163.363V24C0 10.7451 10.7452 0 24 0H264C277.255 0 288 10.7452 288 24V163.362Z")'
            : 'path("M456 0C469.255 0 480 10.7452 480 24V163.362C480 167.121 477.068 170.227 474.527 172.998C472.615 175.083 471.435 177.95 471.435 181.114C471.435 184.278 472.615 187.145 474.527 189.229C477.068 192 480 195.105 480 198.864V272C480 280.837 472.837 288 464 288H16C7.16345 288 2.16198e-07 280.837 0 272V198.864C0.00018967 195.105 2.93206 192 5.47266 189.229C7.38441 187.145 8.56527 184.279 8.56543 181.115C8.56543 177.951 7.38459 175.084 5.47266 172.999C2.93219 170.228 0 167.122 0 163.363V24C0 10.7452 10.7452 5.15438e-07 24 0H456Z")'
        }}
        className={clsx("relative group/approaches rounded-3xl overflow-hidden shrink-0 h-72 text-secondary", variant === "wide" ? "w-120" : "aspect-square", className)}
    >
        <Card className="relative justify-center h-full bg-gradient-to-t from-foreground via-foreground/30 to-white" radius="none" shadow="none">
            <CardHeader>
                <div className={clsx( "",
                    variant === "square" ? "absolute top-3 right-3" : ""
                )}>
                    <Button
                    isIconOnly
                    className={clsx( "rounded-2xl",
                        variant === "wide" ? "border-white bg-foreground/10 backdrop-blur text-white !min-w-fit p-2" : "bg-white",
                    )}
                    >
                        {variant === "square" ? (
                            <i className="text-primary">
                                <Icon icon="ei:play" width="32" height="32" className="rotate-180"/>
                            </i>
                        ) : (
                            <div className="flex items-center">
                                <i className="text-white">
                                    <Icon icon="ei:play" width="32" height="32" className="rotate-180"/>
                                </i>
                                <span>
                                مشاهدۀ نمونۀ تدریس
                                </span>
                            </div>
                        )
                        }
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="relative overflow-hidden">
                {/* <Image
                    as={NextImage}
                    src={image}
                    alt="masters"
                    width={256}
                    height={256}
                    className="!w-full !h-full object-contain"
                    classNames={{wrapper: "!max-w-none"}}
                /> */}
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
    <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
            <i className={clsx(variant === "square" ? "text-foreground" : "text-secondary")}>
                <Star size={24} />
            </i>
            <div className="flex flex-col text-white">
                <h2 className="text-sm font-semibold">{masterName}</h2>

                <div className="flex items-center gap-4 text-xs mt-1">
                    <p className="flex items-center gap-1 text-white">
                        <Icon icon="solar:calendar-line-duotone" width="18" height="18" />
                        {topicName}
                    </p>

                    {variant === "wide" && (
                        <p className="flex items-center gap-1 text-white">
                            <Icon icon="solar:bell-line-duotone" width="18" height="18" />
                            {experience}
                        </p>
                    )}
                </div>
            </div>
        </div>

        <div className={clsx(
            "text-white",
            variant === "wide" ? "bg-foreground p-1 rounded-xl" : ""
        )}>
            <Icon icon="solar:arrow-up-line-duotone" width="24" height="24" className="rotate-135" />
        </div>
        
    </div>

    {variant === "wide" && (
        <div className="bg-primary/10 w-full px-4 py-2 text-[13px] leading-relaxed text-primary">
            {description}
        </div>
    )}
</CardFooter>

        </Card>
    </div>
    )
}
                
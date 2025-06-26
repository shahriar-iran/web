import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {CometStar} from "@/components/Vectors";
import { Icon } from '@iconify/react';
import {Divider} from "@heroui/divider";
import { Chip } from "@heroui/chip";


type CommentCardType = {
    fullName: string;
    role: string;
    rating: number;
    date: string;
    avatarUrl?: string;
    comment?: string;
    className?: string;
    isActive?: boolean;
};





export const CommentCard: React.FC<CommentCardType> = (props) => {

    const {
        fullName,
        role,
        date,
        rating,
        comment,
        className,
        avatarUrl,
        isActive,
    } = props

    const variant = isActive ? "wide" : "square"



    return (
        <div
            data-active={isActive || false}
            className={clsx("relative transition duration-500 rounded-3xl overflow-hidden group/comment shrink-0 w-full max-h-72", className)}
        >
            <Card className="relative transition duration-500 bg-white justify-center w-full h-full rounded-3xl p-3">
                <CardHeader className="py-2">
                    <div className="flex flex-row justify-between gap-2 items-center w-full group-data-[active=false]/comment:justify-center group-data-[active=false]/comment:flex-col">
                        <div className="flex items-center gap-3 group-data-[active=false]/comment:flex-col">
                            <Avatar
                                src={avatarUrl}
                                name={fullName}
                                color="primary"
                                size="lg"
                                radius="lg"
                                className="w-16 h-16 rounded-3xl text-xl"
                            />
                            <span className="font-semibold">
                                {fullName}
                            </span>
                        </div>
                        <Chip 
                            color="primary"
                            variant="light"
                            size="lg"
                            radius="lg"
                            className="w-fit h-14 rounded-3xl font-semibold"
                        >
                            {role}
                        </Chip>
                    </div>
                </CardHeader>
                <hr className="border-dashed border-t-2 border-divider group-data-[active=false]/comment:hidden"/>
                <CardBody className="group-data-[active=false]/comment:hidden max-h-32">
                    <div className="flex items-start gap-2 h-full">
                        {/*
                        <div className="text-primary shrink-0 h-full">
                            <CometStar />
                        </div> 
                        */}
                        <p className="font-normal text-sm leading-7 text-justify ">
                            {comment}
                            {comment}
                            {comment}
                        </p>
                    </div>
                </CardBody>
                <hr className="border-dashed border-t-2 border-divider group-data-[active=false]/comment:hidden"/>
                <CardFooter className="flex-col group-data-[active=false]/comment:h-20">
                    <div className="flex items-center font-semibold text-sm text-foreground/50 justify-end group-data-[active=false]/comment:justify-center w-full gap-3">
                        <div className="flex items-center gap-0.75 group-data-[active=false]/comment:hidden">
                            <span className="">
                               امتیاز:
                            </span>
                            <span className="">
                                {rating}
                            </span>
                        </div>
                        <Divider orientation="vertical" className="h-4 text-black group-data-[active=false]/comment:hidden" />
                        <span className="flex items-center gap-1 text-foreground/50 group-data-[active=false]/comment:text-foreground">
                            <Icon icon="fluent:calendar-date-20-regular" width="24" height="24" className="group-data-[active=false]/comment:hidden" />
                            {date}
                       </span>
                    </div>
                    {variant === "square" && (
                        <div className="w-full h-fit bottom-0 absolute z-10">
                            <div className="relative max-h-24 flex items-start justify-center text-primary">
                                <svg className="max-h-28 shrink-0 w-[850px]" viewBox="0 0 647 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M304.591 4.75293C316.402 -1.58403 330.602 -1.58403 342.413 4.75293L346.812 7.11328C355.784 11.9266 366.253 13.1378 376.087 10.5L382.747 8.71387C392.581 6.07583 403.051 7.28702 412.022 12.1006L426.274 19.7471C431.932 22.782 438.733 22.782 444.391 19.7471C447.896 17.8665 451.604 17.2011 455.139 17.5234H646.723V35.8242H0V17.5234H191.871C195.404 17.2019 199.11 17.8675 202.613 19.7471C208.27 22.782 215.072 22.782 220.729 19.7471L234.981 12.1006C243.953 7.28702 254.423 6.07583 264.257 8.71387L270.917 10.5C280.75 13.1378 291.22 11.9266 300.191 7.11328L304.591 4.75293Z"/>
                                </svg>
                            </div>
                        </div>
                    )}
                    {/* <svg
                        viewBox="0 0 269 36"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full bottom-0 absolute text-primary z-10"
                    >
                        <path
                            d="M252.723 35.824C261.559 35.824 268.723 28.6605 268.723 19.824V17.9392C264.449 16.9451 259.762 17.4014 255.391 19.7468C249.733 22.7819 242.932 22.7819 237.274 19.7468L223.022 12.1003C214.051 7.28678 203.581 6.07559 193.747 8.71362L187.087 10.4998C177.253 13.1376 166.784 11.9264 157.812 7.11304L153.413 4.75269C141.602 -1.58427 127.402 -1.58427 115.591 4.75269L111.191 7.11304C102.22 11.9264 91.7506 13.1376 81.917 10.4998L75.2568 8.71362C65.4231 6.07559 54.9532 7.28678 45.9814 12.1003L31.7295 19.7468C26.0722 22.7819 19.2706 22.7819 13.6133 19.7468C9.14558 17.3498 4.34879 16.9274 0 18.0085V19.824C0 28.6605 7.16344 35.824 16 35.824H252.723Z"
                        />
                    </svg> */}
                </CardFooter>
            </Card>
        </div>
    )
}
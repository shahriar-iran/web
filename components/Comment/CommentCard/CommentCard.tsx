import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {CometStar} from "@/components/Vectors";
import { Icon } from '@iconify/react';


type CommentCardType = {
    userName: string;
    degree: string;
    comment?: string;
    rating: number;
    date: string ;
    className?: string;
    avatarUrl?: string
};





export const CommentCard: React.FC<CommentCardType> = ({
    date,
    degree,
    rating,
    userName,
    comment,
    className,
    avatarUrl
}) => {
    return (
        <div
        className={clsx("relative transition duration-500 rounded-3xl overflow-hidden group/comment shrink-0 w-150", className)}
        >
            <Card className="relative transition duration-500 bg-white group-hover/feature: justify-center h-full p-3">
                <CardHeader>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center gap-2">
                        <Avatar
                        src={avatarUrl}
                        size="lg"
                        />
                        <span className="text-foreground">
                            {userName}
                        </span>
                        </div>
                        <div className="bg-primary/10 text-primary px-2 py-3 w-fit">
                            {degree}
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <div>
                        <i className="rotate-90">
                        <CometStar size={28}/>
                        </i>
                        <p className="">
                            {comment}
                        </p>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex items-center justify-end">
                        <span className="text-foreground/15">
                            {rating}امتیاز
                        </span>
                        <span className="flex items-center gap-1">
                            <Icon icon="fluent:calendar-date-20-regular" width="24" height="24" />
                            {date}
                       </span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
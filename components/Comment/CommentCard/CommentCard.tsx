import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {CometStar} from "@/components/Vectors";
import { Icon } from '@iconify/react';
import {Divider} from "@heroui/divider";


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
            <Card className="relative transition duration-500 bg-white group-hover/comment:bg-foreground
            group-hover/comment:text-white justify-center h-full p-3">
                <CardHeader>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                        <Avatar
                        src={avatarUrl}
                        size="lg"
                        />
                        <span>
                            {userName}
                        </span>
                        </div>
                        <div className="bg-primary/10 text-primary px-4 py-3 w-fit rounded-3xl">
                            {degree}
                        </div>
                    </div>
                </CardHeader>
                <Divider className="my-4" />
                <CardBody>
                    <div className="flex items-center gap-2">
                        <i className="rotate-90 text-primary">
                        <CometStar size={36}/>
                        </i>
                        <p className="font-normal text-medium leading-5 text-justify ">
                            {comment}
                        </p>
                    </div>
                </CardBody>
                <Divider className="my-4" />
                <CardFooter>
                    <div className="flex items-center justify-end w-full gap-3">
                        <span className="text-foreground/50 group-hover/comment:text-white">
                        امتیاز{" "}{rating}
                        </span>
                        <Divider orientation="vertical" className=" h-4 text-black" />
                        <span className="flex items-center gap-1 text-foreground/50 group-hover/comment:text-white">
                            <Icon icon="fluent:calendar-date-20-regular" width="24" height="24" />
                            {date}
                       </span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
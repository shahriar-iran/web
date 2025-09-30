import * as React from "react";
import clsx from "clsx";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {CometStar, Star} from "@/components/Vectors";
import { Icon } from '@iconify/react';
import {Divider} from "@heroui/divider";
import { Chip } from "@heroui/chip";
import jMoment from "jalali-moment";


type CommentCardType = {
    id: number;
    fullName: string;
    grade: string;
    date: string;
    avatarUrl?: string;
    comment?: string;
    className?: string;
    isActive?: boolean;
    isParent?: boolean;
    parentName?: string;
};





export const CommentCard: React.FC<CommentCardType> = (props) => {

    const {
        id,
        fullName,
        grade,
        date,
        comment,
        className,
        avatarUrl,
        isActive,
        isParent,
        parentName,
    } = props

    const variant = isActive ? "wide" : "square"



    return (
        <div
            data-active={isActive || false}
            className={clsx("relative transition duration-500 rounded-3xl overflow-hidden group/comment shrink-0 h-78 min-w-68", className)}
        >
            <Card className="relative transition duration-500 bg-white justify-center w-full h-full rounded-3xl p-3" shadow="none">
                <CardHeader className="py-2">
                    <div className="flex flex-row justify-between gap-2 items-center w-full group-data-[active=false]/comment:justify-center group-data-[active=false]/comment:flex-col">
                        <div className="flex items-center gap-5 group-data-[active=false]/comment:flex-col">
                            <Avatar
                                src={avatarUrl}
                                name={fullName}
                                color="primary"
                                size="lg"
                                radius="lg"
                                className="w-16 h-16 rounded-3xl text-base"
                            />
                            <span className="font-semibold text-sm">
                                {isParent ? parentName : fullName}
                            </span>
                        </div>
                        {!isParent && (
                            <Chip 
                                color="default"
                                variant="light"
                                size="lg"
                                radius="lg"
                                className="w-fit h-12 font-semibold text-xs rounded-2xl text-primary bg-primary/10"
                            >
                                دانش آموز {grade} مدرسه شهریار
                            </Chip>
                        )}
                        {isParent && (
                            <Chip 
                                color="default"
                                variant="light"
                                size="lg"
                                radius="lg"
                                className="w-fit h-12 font-semibold text-xs rounded-2xl text-warning bg-warning/10"
                            >
                                اولیاء {fullName}
                            </Chip>
                        )}
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
                        <span className="flex items-center gap-1 text-foreground/50 group-data-[active=false]/comment:text-foreground">
                            {/* <Icon icon="fluent:calendar-date-20-regular" width="24" height="24" className="group-data-[active=false]/comment:hidden" /> */}
                            <Star size={16} strokeClassName={isParent ? "fill-warning" : "fill-secondary"} />
                            {jMoment(date).locale("fa").format("jDD jMMMM jYYYY")}
                            <Star size={16} strokeClassName={isParent ? "fill-warning" : "fill-secondary"} />
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
                </CardFooter>
            </Card>
        </div>
    )
}
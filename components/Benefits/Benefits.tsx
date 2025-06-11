import * as React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import { Button } from "@heroui/button";
import {Star} from "@/components/Vectors"


type BenefitsPropsType = {
    className?: string;
    icon: string | React.ReactNode;
    titleEn: string;
    titleFa: string;
}



export const Benefits: React.FC<BenefitsPropsType> = (props) => {
    const {
        className,
        icon,
        titleEn,
        titleFa
    } = props;
    return(
        <div
            className={clsx("relative group/benefit rounded-3xl overflow-hidden shrink-0 w-100 h-72 text-secondary ", className)}
        >
            <Card className="relative justify-center h-full" radius="none" shadow="none">
                <CardHeader>
                    <div className="flex justify-start w-full items-center gap-3">
                        <Button
                        isIconOnly
                        startContent={icon}
                        className="bg-primary/10 group-hover/benefit:bg-foreground text-primary group-hover/benefit:text-white"
                        />
                        <span className="text-medium font-bold text-foreground group-hover/benefit:text-white">
                            {titleEn}
                        </span>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center w-full">
                            <i className="text-primary">
                                <Star size={24}/>
                            </i>
                            {titleFa}
                        </div>
                        <span className="flex justify-end w-full text-foreground/15">
                            {titleEn}
                        </span>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
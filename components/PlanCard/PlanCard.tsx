import * as React from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";

type PlanCardPropsType = {
    title: string;
    subtitle: string;
}



export const PlanCard: React.FC<PlanCardPropsType> = (props) => {


    const {
        title,
        subtitle,
    } = props;

    return (
        <div className="relative group/plan w-fit h-fit">   
            <Card className="w-100 relative p-2 rounded-3xl group-hover/plan:bg-foreground" radius="none" shadow="none">
                <CardHeader className="relative flex-row justify-between py-4 px-4 bg-foreground group-hover/plan:bg-white/5 rounded-2xl text-white gap-1 items-center">
                    <div className="flex flex-col flex-1 gap-1">
                        <h4 className="font-bold w-full">{title}</h4>
                        <span className="font-light text-xs opacity-50 w-full">{subtitle}</span>
                    </div>
                    <Image
                        as={NextImage}
                        src="/static/assets/images/silver-plan.png" 
                        alt={title}
                        title={title}
                        width={70}
                        height={70}
                        radius="md"
                        className="!w-full !h-auto object-contain "
                        classNames={{wrapper: ""}}
                    />
                </CardHeader>
                <CardBody className="p-4">
                   <ul className="flex flex-col gap-2">
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                        <li className="flex flex-row gap-1 items-start text-foreground group-hover/plan:text-white hover:text-primary transition-colors duration-500 select-none">
                            <i className="">
                                <Icon icon="solar:info-circle-line-duotone" width="20" height="20" />
                            </i>
                            <span className="text-xs text-start leading-5 font-semibold text-foreground group-hover/plan:text-white">
                            ویدیوهای آفـــلاین تـمام دروس عـــمومی
                            </span>
                        </li>
                   </ul>
                </CardBody>
                <hr className="h-2 border-t-2 border-dashed opacity-20 group-hover/plan:border-white"/>
                <CardFooter className="flex justify-between gap-2 p-1">
                    <Button
                        color="primary"
                        variant="flat"
                        size="lg"
                        radius="lg"
                        className="text-sm font-semibold rounded-2xl group-hover/plan:bg-primary group-hover/plan:text-white"
                    >
                        انـــــتخاب طـــــرح نـقــره‌ای
                    </Button>
                    <Button
                        color="primary"
                        variant="flat"
                        size="lg"
                        radius="lg"
                        isIconOnly
                        className="rounded-2xl group-hover/plan:bg-primary group-hover/plan:text-white"
                    >
                        <Icon icon="solar:arrow-right-up-line-duotone" width="20" height="20" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}


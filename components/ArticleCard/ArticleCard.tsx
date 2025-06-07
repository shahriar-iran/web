import * as React from "react"
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";


type ArticleCardPropsType = {
    title: string;
    footerItems?: {
        icon: React.ReactNode;
        value: string;
    }[];
}



export const ArticleCard: React.FC<ArticleCardPropsType> = (props) => {


    const {
        title,
        footerItems,
    } = props;

    return (
        <div className="relative group/article w-full h-fit">   
            <Card className="relative p-0 bg-transparent" radius="none" fullWidth shadow="none">
                <CardBody className="relative p-2 pb-0 border-2 border-primary/20 bg-white rounded-3xl rounded-b-none">
                    <Image
                        as={NextImage}
                        src="/static/assets/images/school-card.png" 
                        alt={title}
                        title={title}
                        width={256}
                        height={256}
                        radius="none"
                        className="!w-full !h-auto object-contain rounded-2xl rounded-b-none"
                        classNames={{wrapper: "!max-w-none"}}
                    />
                    <Button
                        isIconOnly
                        variant="solid"
                        radius="lg"
                        className="absolute z-10 top-4 right-4 text-white bg-white/15 backdrop-blur-xl transition-colors duration-1000 group-hover/article:bg-primary"
                    >
                        <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                    </Button>
                    <Button
                        variant="bordered"
                        radius="lg"
                        className="absolute z-10 top-4 left-4 text-white bg-white/15 backdrop-blur-xl border-white text-xs"
                    >
                        آمــــــوزشــی
                    </Button>
                </CardBody>
                <CardFooter className="flex-col border-2 group-hover/article:bg-primary group-hover/article:text-white border-primary rounded-2xl px-2 py-4 -mt-3 z-10 gap-2 items-start w-full bg-white text-foreground transition-colors duration-1000">
                    <div className="flex flex-row gap-1 px-2 justify-center items-start w-full max-w-full">
                        <i className="h-5 w-fit flex justify-center items-center">
                            <svg width="12" viewBox="0 0 13 13" className="shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62598 1.04785C7.41214 3.77677 9.68364 5.8197 12.4805 6.3125C9.68364 6.8053 7.41214 8.84823 6.62598 11.5771L6.38672 12.4062L6.14746 11.5771C5.3613 8.84823 3.0898 6.8053 0.292969 6.3125C3.0898 5.8197 5.3613 3.77677 6.14746 1.04785L6.38672 0.21875L6.62598 1.04785ZM6.29004 4.06641C5.95472 5.23045 4.98597 6.10229 3.79297 6.3125C4.98597 6.52271 5.95472 7.39455 6.29004 8.55859L6.39258 8.91211L6.49414 8.55859C6.82943 7.39465 7.79835 6.5228 8.99121 6.3125C7.79835 6.1022 6.82943 5.23035 6.49414 4.06641L6.39258 3.71289L6.29004 4.06641Z" fill="currentColor"/>
                            </svg>
                        </i>
                        <h6 className="text-sm text-justify font-bold w-full leading-6 text-clamp-2 max-w-full">{title}</h6>
                    </div>
                    {footerItems && footerItems?.length > 0 && (
                        <hr className="border-1 border-dashed w-full opacity-20"/>
                    )}
                    {footerItems && footerItems?.length > 0 && (
                        <div className="flex items-center justify-between gap-2">
                            {footerItems.map((item, index) => {
                                return (
                                    <div key={index} className="shrink-0 flex flex-row gap-1 justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold">{item.value}</span>
                                    </div>
                                )}
                            )}
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}


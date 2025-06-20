import * as React from "react"
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { PageTitle } from "../PageTitle/PageTitle";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { rootConfig } from "@/config/root";

type AboutUsPropsType = {

}



export const AboutUs: React.FC<AboutUsPropsType> = (props) => {


    const {

    } = props;

    return (
        <div className="relative group/aboutus w-full h-fit">   
            <Card className="rounded-4xl" radius="lg" shadow="lg" >
                 <CardBody className="p-2 select-none relative">
                    <div className="relative flex flex-col w-full">
                        <Image
                            as={NextImage}
                            src="/static/assets/images/school-card.png" 
                            alt={rootConfig.name}
                            title={rootConfig.name}
                            width={1024}
                            height={1024}
                            radius="none"
                            className="!w-full !h-full max-h-[40dvh] object-cover"
                            classNames={{wrapper: "!max-w-none overflow-hidden relative rounded-3xl after:absolute after:bottom-0 after:left-0 after:bg-linear-to-t after:from-black after:to-transparent after: after:h-1/2 after:w-full after:z-10"}}
                        />
                        <div className="absolute bottom-0 w-full flex justify-center z-10 px-2 lg:px-4">
                            <div className="flex flex-row overflow-y-hidden py-2 lg:py-6 px-0.5 w-fit items-center justify-start gap-2 lg:gap-4">
                                <AboutUsCounter
                                    color="success"
                                    label="دانش آموزان ما"
                                    counter="1128"
                                    icon="solar:user-circle-bold-duotone"
                                />
                                <AboutUsCounter
                                    color="success"
                                    label="کارگاه های ما"
                                    counter="34"
                                    icon="solar:backpack-bold-duotone"
                                />
                                <AboutUsCounter
                                    color="warning"
                                    label="اساتید و معلمان"
                                    counter="238"
                                    icon="solar:notes-bold-duotone"
                                />
                                <AboutUsCounter
                                    color="success"
                                    label="رضایت از ما"
                                    counter="%94"
                                    icon="solar:star-bold-duotone"
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="flex-col py-5 px-5 lg:px-12 gap-5 items-start w-full">
                    <PageTitle
                        variant="centered"
                        title="دربــــــــارۀ مـــــــــا"
                        description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
                    />
                    <p className="text-sm text-foreground leading-7 text-justify">
                        لـــورم ایپسوم متن ساختگی بــــا تولید سادگی نــامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نـرم افزارها شناخت بیشتری را برای طراحان رایـــــانه ای علی الخصوص طراحان خــلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}





type AboutUsCounterPropsType = {
    label: string;
    counter: string;
    icon: string;
    color?: "success" | "warning" | "default" | "primary" | "secondary" | "danger"
}

export const AboutUsCounter: React.FC<AboutUsCounterPropsType> = (props) => {

    const {
        label,
        counter,
        icon,
        color,
    } = props

    return (
        <Chip 
                                    variant="flat"
                                    color={color}
                                    size="lg"
                                    radius="lg"
                                    className="h-11 lg:h-14 rounded-2xl lg:rounded-3xl border-1 lg:border-2 backdrop-blur-xs gap-0 lg:gap-2 px-1 lg:px-2 pe-2 lg:pe-6 text-sm font-bold"
                                    startContent={(
                                        <i className="bg-white flex items-center justify-center rounded-xl aspect-square h-8 w-8 lg:h-10 lg:w-10">
                                            <Icon icon={icon} width="24" height="24" />
                                        </i>
                                    )}
                                    endContent={(
                                        <span className="text-white font-bold lg:font-black text-lg lg:text-xl">
                                            {counter}
                                        </span>
                                    )}
                                >
            <span className="hidden lg:block">{label}</span>
        </Chip>
    )
}
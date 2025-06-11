"use client";
import * as React from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalFooter

} from "@heroui/modal"
import {CometStar} from "@/components/Vectors";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Star} from "@/components/Vectors";
import { Card , CardBody , CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { div } from "framer-motion/client";








const HonorsItem: React.FC<{ label: string | React.ReactNode }> = ({ label }) => (
    <div className="flex items-center gap-2 shrink-0">
        <i className="text-primary">
            <Star size={24}/>
        </i>
        <span className="text-foreground truncate">
            {label}
        </span>
    </div>
  );











  const ModalCard: React.FC<{imageUrl: string , educational: string , masterName: string , jobPosition: string , history: string}> = (
    {   imageUrl,
        educational,
        masterName,
        jobPosition,
        history
    }
) => (
    <div
            className="relative group/box rounded-3xl overflow-hidden shrink-0 h-130 border-2 border-primary/25 hover:border-primary transition-all duration-500"
        >
            <Image
            as={NextImage}
            alt="HeroUI hero Image"
            src={imageUrl}
            width={256}
            height={256}
            radius="none"
            className="!w-full !h-auto object-cover inset-0 absolute grayscale group-hover/box:grayscale-0 transition-all duration-500 z-0"
            classNames={{wrapper: "!max-w-none"}}
            />


            <Card
        className="relative z-10 justify-center h-full bg-gradient-to-t from-foreground to-white/10" radius="lg" shadow="none"
    >

    <div className="relative z-10 h-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex w-full justify-start">
            <Button
            radius="lg"
            startContent={
                <Icon icon="tabler:video" width="24" height="24" className="text-white"/>
            }
            className="bg-foreground/5 backdrop-blur border border-white p-2"
            >
                <span className="text-white">
                مشاهدۀ ویدئوها
                </span>
            </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2 justify-end h-full">
            <div className="flex items-center gap-1">
                <i className="text-primary">
                    <Star size={24}/>
                </i>
                <span className="text-xl text-white">
                {educational}
                </span>
            </div>
            <div className="flex flex-col gap-5">
                <span className="text-large text-white flex justify-start">
                    {masterName}
                </span>
                <span className="text-white/60 text-right">
                    {jobPosition}
                </span>
            </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex w-full justify-between items-center">
            <div className="">
            <Button
            radius="lg"
            isIconOnly
            startContent={
            <Icon icon="solar:arrow-right-line-duotone" width="24" height="24" className="-rotate-135 text-white"/>
            }
            className="bg-foreground/5 backdrop-blur border border-white p-1"
            />
            </div>
            <div className="flex items-center gap-1">
                <i>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.624 13.3781V16.0731C19.624 17.0815 18.799 17.9065 17.7907 17.9065H5.36068C4.35234 17.9065 3.52734 17.0815 3.52734 16.0731V13.3781C3.52734 8.95978 7.10234 5.38478 11.5207 5.38478H11.6307C16.049 5.37562 19.624 8.95978 19.624 13.3781Z" fill="#22C197"/>
                    <path d="M12.2617 2.69727V5.4106C12.0509 5.39226 11.84 5.3831 11.6292 5.3831H11.5192C11.3084 5.3831 11.0976 5.39226 10.8867 5.4106V2.69727C10.8867 2.32143 11.1984 2.00977 11.5742 2.00977C11.9501 2.00977 12.2617 2.32143 12.2617 2.69727Z" fill="#22C197"/>
                    <path d="M14.616 17.8965C14.506 19.4915 13.186 20.7473 11.5726 20.7473C9.9593 20.7473 8.63013 19.4915 8.5293 17.8965H14.616Z" fill="#22C197"/>
                </svg>
                </i>
                <span className="text-sm text-white">
                    {history}
                </span>
            </div>
        </div>
      </CardFooter>  
      </div>
    </Card>
</div>
  );












type ResumeModalPropsType = {
    masterName: string;
}



export const ResumeModal: React.FC<ResumeModalPropsType> = (props) => {
    const {
        masterName,

    } = props;
    return(
        <>
                <Modal
                className="w-full max-w-500 mx-auto"
                    hideCloseButton={true}
                    defaultOpen
                    backdrop="opaque"
                    motionProps={{
                    variants: {
                        enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                        },
                        exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                        },
                    },
                    }}
                >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-row justify-between w-full gap-2">
                            <div className="flex items-center gap-2">
                                <i className="text-primary">
                                    <CometStar size={24}/>
                                </i>
                                <span className="text-foreground text-xl">
                                طــــراحان مـــدرسۀ هـــیبریدی
                                </span>
                            </div>
                            <div>
                                <Button
                                isIconOnly
                                startContent={
                                    <Icon icon="material-symbols:close-rounded" width={20} height={20}/>
                                }
                                radius="full"
                                className="border-2 border-foreground bg-white"
                                />
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="grid grid-cols-6 gap-x-10">
                                <div className="col-span-2">
                                <ModalCard
                                masterName="امـــــیررضا گـــــیفانی"
                                educational="مهندس"
                                jobPosition="طراح مدارس هیبریدی، مـدیر آمــوزشی"
                                history="14 سال سابقه"
                                imageUrl="/gifani-rangi.png"
                                />
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col gap-20">
                                        <div className="flex items-center gap-3">
                                            <Button
                                            className="p-4 border border-primary/20 bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-500"
                                            >
                                                تحصیلات دانشگاهی
                                            </Button>
                                            <Button
                                            className="p-4 border border-primary/20 bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-500"
                                            >
                                                سوابــــــق پژوهشــــــی
                                            </Button>
                                            <Button
                                            className="p-4 border border-primary/20 bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-500"
                                            >
                                                سوابق آموزشی و اجرایی
                                            </Button>
                                        </div>
                                        <div className="flex flex-col gap-4 items-start">
                                            <HonorsItem
                                            label="نویسنده مقالات مختلف در زمینه های تغذیه ورزشی حرکات اصلاحی و فیزیولوژی ورزش"
                                            />
                                            <HonorsItem
                                            label="گذراندن دوره های برندینگ و موفقیت کشوری تابستان۹۵"
                                            />
                                            <HonorsItem
                                            label="دارنده گواهینامه ISO 9001-2008 در مدیریت آموزشی/ ۱۳۹۴"
                                            />
                                            <HonorsItem
                                            label="شرکت در دوره آموزشی مدارس موفق، در کشور ترکیه/ ۲۰۱۶"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className="flex justify-start w-full">
                                <div className="flex flex-row items-center bg-primary/20 rounded-xl">
                                    <span className="text-primary text-sm px-4">
                                        {masterName}
                                    </span>
                                    <Button
                                    isIconOnly
                                    className="bg-foreground"
                                    startContent={
                                        <Icon icon="solar:arrow-left-line-duotone" width={20} height={20} className="text-white"/>
                                    }
                                    radius="lg"
                                    />
                                </div>
                            </div>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
        </>
    )
}
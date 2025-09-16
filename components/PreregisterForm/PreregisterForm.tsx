"use client"



import * as React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import clsx from "clsx";
import Page from "@/app/page";
import { PageTitle } from "../PageTitle/PageTitle";
import { CusInput } from "../General/CusInput/CusInput";
import { Controller, useForm } from "react-hook-form";
import { Button, Chip, Input } from "@heroui/react";
import { CusSelect } from "../General/CusSelect/CusSelect";
import { Icon } from "@iconify/react/dist/iconify.js";



type PreregisterFormType = {
    id: string;
    title: string;
    img: string;
};





export const PreregisterForm: React.FC<PreregisterFormType> = (props) => {

    const {
        id,
        title,
        img,
    } = props


    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap justify-between items-end gap-6">
                {(id==="school") && (<SchoolFormCard />)}
                {(id==="olympiad") && (<OlympiadFormCard />)}
                <Card className="p-0 w-full sm:w-96 gap-2 rounded-2xl" shadow="none" radius="none">
                    <CardBody className="p-2 m-0">
                        <Image
                            src={`/static/assets/images/${img}`}
                            alt={title}
                            height={256}
                            width={256}
                            className="!max-h-full !h-full !w-auto aspect-square object-cover border border-foreground overflow-hidden rounded-xl"
                        />
                    </CardBody>
                    <CardFooter className="bg-primary-50 m-0 p-0 px-2 py-1 rounded-none mb-4">
                        <h5 className="text-xs font-bold">
                            {title}
                        </h5>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}




const SchoolFormCard = () => {

    const { register, handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className="flex-1 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <PageTitle 
                    title="ثبت‌نام در فرآیند ورودی مجموعه شهریار ایران"
                    description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
                    className="col-span-full"
                />
                <div className="col-span-full"/>
                <CusInput
                    control={control}
                    name="fullName"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
                <CusInput
                    control={control}
                    isPhoneNumber
                    name="phoneNumber"
                    placeholder="شماره تلفن خود را وارد کنید"
                />
                <CusSelect
                    control={control}
                    name="grade"
                    placeholder="پایه تحصیلی خود را انتخاب کنید"
                    className="col-span-full"
                />
                <div className="col-span-full mt-4 flex flex-wrap gap-3 w-full flex-row items-center justify-between">
                    <Button
                        variant="shadow"
                        color="primary"
                        size="lg"
                        endContent={(
                            <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                        )}
                        className="h-14 rounded-3xl"
                    >
                        ثبت درخواست تماس
                    </Button>
                    <Chip
                        startContent={(
                            <i className="bg-foreground text-white flex items-center justify-center rounded-2xl aspect-square h-10 w-10">
                                <Icon icon="solar:call-chat-bold-duotone" width="24" height="24" />
                            </i>
                        )}
                        className="h-14 rounded-3xl ps-2 pe-4 bg-default-100 order-first lg:order-last"
                    >
                        <div className="flex items-center gap-5 font-medium text-xs">
                            کـارشناسان مـا بــه زودی با شــما تـماس خواهـــند گـــــرفت.
                        </div>
                    </Chip>
                </div>
                <div className="h-4"/>
            </div>
        </div>
    );

}

const OlympiadFormCard = () => {

    const { register, handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className="flex-1 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <PageTitle 
                    title="ثبت‌نام در فرآیند ورودی باشگاه المپیاد شهریار ایران"
                    description="دبیرستــــان غـــــیردولتی شــــهریار ایـــــران"
                    className="col-span-full"
                />
                <div className="col-span-full"/>
                <CusInput
                    control={control}
                    name="fullName"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
                <CusInput
                    control={control}
                    isPhoneNumber
                    name="phoneNumber"
                    placeholder="شماره تلفن خود را وارد کنید"
                />
                <CusInput
                    control={control}
                    name="school"
                    placeholder="نام مدرسه"
                />
                <CusInput
                    control={control}
                    name="grade"
                    placeholder="پایه تحصیلی فعلی"
                />
                <div className="col-span-full mt-4 flex flex-wrap gap-3 w-full flex-row items-center justify-between">
                    <Button
                        variant="shadow"
                        color="primary"
                        size="lg"
                        endContent={(
                            <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                        )}
                        className="h-14 rounded-3xl"
                    >
                        ثبت درخواست تماس
                    </Button>
                    <Chip
                        startContent={(
                            <i className="bg-secondary text-white flex items-center justify-center rounded-2xl aspect-square h-10 w-10">
                                <Icon icon="solar:call-chat-bold-duotone" width="24" height="24" />
                            </i>
                        )}
                        className="h-14 rounded-3xl ps-2 pe-4 bg-default-100 order-first lg:order-last"
                    >
                        <div className="flex items-center gap-5 font-medium text-xs">
                            کـارشناسان مـا بــه زودی با شــما تـماس خواهـــند گـــــرفت.
                        </div>
                    </Chip>
                </div>
                <div className="h-4"/>
            </div>
        </div>
    );

}
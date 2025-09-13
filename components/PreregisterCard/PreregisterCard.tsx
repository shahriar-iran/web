import * as React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { CometStar } from "../Vectors";



type PreregisterCardType = {

};





export const PreregisterCard: React.FC<PreregisterCardType> = (props) => {

    const {
        
    } = props

    return (
        <Card
            className="relative transition duration-500 bg-white justify-center w-full h-full rounded-3xl gap-3"
        >
            <CardBody
                className="pb-0 overflow-hidden"
            >
                <PreregisterBox/>
            </CardBody>
            <CardFooter className="pt-0 grid grid-cols-1 lg:grid-cols-2 gap-3 h-24">
                <PreregisterCardItem
                    link="olympiad"
                    title="ثبت‌نام در باشگاه المپیاد دبیرستان شهریار ایران"
                    description="مسیر نخبگی، با همراهی فرزندان فردوسی و ستارگان ایران‌زمین"
                />
                <PreregisterCardItem
                    link="school"
                    title="ثبت‌نام حضوری در ‌دبیرستان هیبریدی شهریار ایران"
                    description="دبـــیرستان دوره اول و دوم، پــسرانه (مشهد، خراسان رضوی)"
                />
            </CardFooter>
        </Card>
    )
}



type PreregisterCardItemType = {
    link: string;
    title: string;
    description: string;
}

const PreregisterCardItem = (props: PreregisterCardItemType) => {

    const {
        link,
        title,
        description,
    } = props

    return (
        <Link 
            href={`/preregister/${link}`}
            className="bg-white hover:bg-primary flex flex-row gap-2 border border-primary-100 hover:border-primary cursor-pointer transition duration-500 p-2 rounded-t-xl rounded-b-2xl h-full"
        >
            <div className="bg-red-500 w-12 h-full">

            </div>
            <div className="flex flex-col gap-1 justify-center h-full flex-1">
                <h5 className="font-bold text-sm">{title}</h5>
                <h6 className="font-tall text-sm opacity-60">{description}</h6>
            </div>
            <div className="bg-green-500 w-40 h-full">

            </div>
        </Link>
    )
}




const PreregisterBox = () => {

    return (
        <div className="relative bg-foreground rounded-t-2xl rounded-b-xl h-full grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="flex flex-row -space-x-3 items-center">
                <div className="w-40 h-full flex justify-end pt-14">
                    <div className="bg-primary h-16 w-16 bg-primary relative rounded-2xl">
                        <Image
                            src="/static/assets/images/graduation_cap.png"
                            alt="فارغ التحصیلی"
                            height={128}
                            width={128}
                            className="!max-h-full !h-full !w-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1 justify-between h-52 z-10">
                    <div className="flex flex-col text-2xl items-start gap-3 text-white">
                        <h1 className="font-black">
                            همراهت هستیم
                        </h1>
                        <h3 className="font-semibold">
                            برای ساختن آینده ای روشن
                        </h3>
                        <h6 className="font-thin text-xs opacity-40">
                            دبیــــرستان دورۀ اول و دوم شهریـــار ایــــران
                        </h6>
                    </div>
                    <div
                        className={clsx(
                            "relative h-12 bg-primary select-none text-start text-white flex items-center justify-center gap-3 px-6 rounded-2xl overflow-hidden font-tall w-fit",
                            "after:absolute after:h-[calc(100%-8px)] after:w-4 after:bg-white after:rounded-2xl after:top-1 after:-end-2",
                            "before:absolute before:h-[calc(100%-8px)] before:w-4 before:bg-white before:rounded-2xl before:top-1 before:-start-2",
                        )}
                    >
                        ثبت نام سال تحصیلی 1405 - 1404
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center h-96">
                <Image
                    src="/static/assets/images/preregister.png"
                    alt="پیش ثبت نام"
                    height={512}
                    width={512}
                    className="!max-h-full !h-full !w-auto"
                />
            </div>
        </div>
    )
}
import * as React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";



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
            <CardFooter className="pt-0 grid grid-cols-1 lg:grid-cols-2 gap-3">
                <PreregisterCardItem
                    link="olympiad"
                />
                <PreregisterCardItem
                    link="school"
                />
            </CardFooter>
        </Card>
    )
}



const PreregisterCardItem = (props: {link: string}) => {

    const {
        link,
    } = props

    return (
        <Link 
            href={`/preregister/${link}`}
            className="bg-white hover:bg-primary border border-primary-100 hover:border-primary cursor-pointer transition duration-500 p-2 rounded-t-xl rounded-b-2xl h-20"
        >

        </Link>
    )
}




const PreregisterBox = () => {

    return (
        <div className="relative bg-foreground rounded-t-2xl rounded-b-xl h-full grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="flex flex-row gap-4 items-center">
                <div className="w-40 h-full">

                </div>
                <div className="flex flex-col gap-5 flex-1 justify-between h-48">
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
                    <div className="bg-primary py-4 text-start text-white px-2 rounded-xl">
                        ثبت نام سال تحصیلی
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
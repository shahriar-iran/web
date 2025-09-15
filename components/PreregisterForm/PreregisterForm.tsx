"use client";

import * as React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";



type PreregisterFormType = {
    title: string;
    img: string;
};





export const PreregisterForm: React.FC<PreregisterFormType> = (props) => {

    const {
        title,
        img,
    } = props


    return (
        <div className="w-full">
            <div className="flex flex-row justify-between items-center gap-6">
                <div className="text-white">فرم پیش ثبت نام</div>
                <Card className="p-0 w-80 gap-2 rounded-2xl" shadow="none" radius="none">
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


    // return (
    //     <Card
    //         className="relative transition duration-500 bg-white justify-center w-full h-full rounded-3xl gap-3"
    //     >
            
    //     </Card>
    // )
}
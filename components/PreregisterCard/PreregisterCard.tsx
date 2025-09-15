"use client";

import * as React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";



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
            <CardFooter className="pt-0 grid grid-cols-1 lg:grid-cols-2 gap-3 h-48 lg:h-24">
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

    const pathname = usePathname();
    const isActive = React.useMemo(() => {
        if (!pathname) return false;
        const clean = pathname.split(/[?#]/)[0];
        const segs = clean.split("/").filter(Boolean);
        const idx = segs.indexOf("preregister");
        return idx !== -1 && segs[idx + 1] === link;
    }, [pathname, link]);

    return (
        <Link 
            href={`/preregister/${link}`}
            data-active={isActive}
            className="relative group bg-white hover:bg-primary data-[active=true]:bg-primary flex flex-row gap-2 border border-primary-100 hover:border-primary overflow-hidden cursor-pointer transition duration-500 rounded-t-xl rounded-b-2xl max-h-full h-full"
        >
            <div className="w-16 h-full">

            </div>
            <div className="flex flex-col gap-1 justify-center h-full flex-1 text-foreground group-hover:text-white group-data-[active=true]:text-white transition duration-500">
                <h5 className="font-bold text-sm truncate">{title}</h5>
                <h6 className="font-tall text-sm opacity-60 truncate">{description}</h6>
            </div>
            <div className="h-full text-primary group-hover:text-white group-data-[active=true]:text-white transition duration-500">
                <svg className="h-full" viewBox="0 0 253 115" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2336_8275)">
                        <path d="M161.053 -136L249.009 -22.6892C257.887 -11.2517 245.431 4.35405 232.177 -1.60056C223.615 -5.44677 213.64 -0.611738 211.436 8.45334L208.492 20.5507C206.335 29.4189 199.041 36.1476 189.971 37.636C176.423 39.859 167.542 52.9247 170.543 66.2217L171.193 69.1036C175.966 90.2566 153.659 107.305 134.266 97.3248L131.624 95.9649C119.433 89.6915 104.435 94.8754 98.8096 107.306C95.0434 115.628 86.6247 120.908 77.4327 120.713L64.8936 120.448C55.4976 120.249 48.2397 128.584 49.8015 137.78C52.2199 152.016 33.8334 159.981 24.9552 148.543L-63 35.2327L161.053 -136Z" fill="currentColor" fillOpacity="0.05" stroke="url(#paint0_linear_2336_8275)"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_2336_8275" x1="259.321" y1="-19.2696" x2="73.309" y2="122.458" gradientUnits="userSpaceOnUse">
                        <stop offset="0.238259" stopColor="currentColor" stopOpacity="0"/>
                        <stop offset="1" stopColor="currentColor"/>
                        </linearGradient>
                        <clipPath id="clip0_2336_8275">
                            <rect width="253" height="115" fill="currentColor"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="absolute -top-1 end-0 px-4 h-full w-fit pointer-events-none">
                <Image
                    src={`/static/assets/images/register-${link}.png`}
                    alt={title}
                    height={128}
                    width={128}
                    className="!max-h-full !h-full !w-auto"
                />
            </div>
        </Link>
    )
}




const PreregisterBox = () => {

    return (
        <div className="relative bg-foreground h-64 lg:h-96 rounded-t-2xl rounded-b-xl grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="flex flex-row py-4 -space-x-3 items-center">
                <div className="w-20 md:w-32 lg:w-40 h-full flex justify-end pt-0 lg:pt-14">
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
                <div className="flex flex-col gap-5 flex-1 justify-between z-10">
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
            <div className="items-center justify-center hidden lg:flex h-full max-h-full overflow-hidden end-0">
                <Image
                    src="/static/assets/images/preregister.png"
                    alt="پیش ثبت نام"
                    height={1024}
                    width={1024}
                    className="!max-h-full !h-[calc(100%+80px)] !w-auto object-cover"
                />
            </div>
        </div>
    )
}
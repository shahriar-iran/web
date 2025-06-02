import * as React from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import { Image } from "@heroui/image";
import NextImage from "next/image";


type FeatureCardPropsType = {
    title: string;
    englishTitle: string;
    image: string;
    className?: string;
}



export const FeatureCard: React.FC<FeatureCardPropsType> = (props) => {


    const {
        title,
        englishTitle,
        image,
        className,
    } = props;

    return (
        <div className={clsx("relative border-2 border-primary-100 hover:border-foreground transition duration-500 rounded-3xl overflow-hidden group/feature shrink-0 w-84", className)}>
            <svg
                width="305" 
                height="150"
                viewBox="0 0 305 150"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[calc(100%+12px)] top-0 absolute z-10 transition duration-500 fill-primary/10 stroke-none group-hover/feature:stroke-primary"
              >
                <path
                    d="M42.7129 -155.175L-15.8885 21.3882C-21.7282 38.9838 -0.35334 52.7044 13.1974 40.3312L13.5154 40.0334C22.2101 31.7527 36.2102 33.2746 42.9505 43.1024L43.2661 43.5776L52.0423 57.1894C58.3544 66.9792 69.8286 72.1175 81.3063 70.3439L81.8525 70.2546C99.1057 67.2578 115.347 79.1425 117.807 96.3699L117.914 97.1946L118.358 101.013C121.576 128.734 155.47 140.191 174.856 120.39L175.312 119.916L177.951 117.121C189.97 104.386 210.095 104.172 222.385 116.493L222.964 117.09C230.971 125.549 243.194 128.486 254.149 124.63L254.67 124.442L269.844 118.779C281.093 114.581 293.369 121.48 295.705 133.167L295.809 133.727C298.949 152.146 324.64 154.098 330.527 136.364L389.128 -40.1997L42.7129 -155.175Z" 
                    strokeWidth="1.5"
                    className="transition duration-500"
                />
            </svg>
            <Card className="relative transition duration-500 bg-white group-hover/feature:bg-foreground justify-center h-full text-[]" radius="none" shadow="none">
                <CardHeader>
                    <div className="bg-white font-bold select-none text-lg rounded-xl h-11 w-11 flex items-center justify-center">
                        1
                    </div>
                </CardHeader>
                <CardBody className="pr-8 pb-12">
                    <div className={clsx("relative flex flex-col gap-16 min-w-24 max-w-48 items-start")}>
                        <h5 dir="ltr" className="relative text-md text-right font-bold text-foreground transition duration-500 group-hover/feature:text-white truncate max-w-full w-fit">
                            {englishTitle}
                        </h5>
                        <h5 className="relative text-md text-wrap line-clamp-2 leading-7 text-right font-semibold text-foreground transition duration-500 group-hover/feature:text-white truncate max-w-full w-fit">
                            {title}
                        </h5>
                    </div>
                </CardBody>
            </Card>
            <div className="absolute h-full flex justify-center items-center bottom-0 left-4 z-10 w-50">
                <Image
                    as={NextImage}
                    src={image}
                    alt={title}
                    title={title}
                    width={256}
                    height={256}
                    className="!w-full !h-auto object-contain"
                    classNames={{wrapper: "!max-w-none"}}
                />
            </div>
        </div>
    )
}


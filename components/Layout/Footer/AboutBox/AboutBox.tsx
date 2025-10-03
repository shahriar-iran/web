import React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";



export interface AboutBoxProps {

}



export const AboutBox: React.FC<AboutBoxProps> = (props) => {

    const {

    } = props

    return(
        <p className="font-normal text-sm leading-7 text-justify line-clamp-4">
            مدرسه شهریارایران به‌عنوان یکی از پیشروترین مراکز آموزشی کشور، با رویکردی نوین در یادگیری، مسیر خود را آغاز کرده است.
ما با تکیه بر روش‌های آموزشی ترکیبی، بهره‌گیری از فناوری‌های نوین و ایجاد محیطی پویا و الهام‌بخش، در تلاش هستیم تا دانش‌آموزانی توانمند، خلاق و آماده ورود به آینده‌ای روشن تربیت کنیم.
        </p> 
    )
}
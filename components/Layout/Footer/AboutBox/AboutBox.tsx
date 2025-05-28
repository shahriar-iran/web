import React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";



export interface AboutBoxProps {

}



export const AboutBox: React.FC<AboutBoxProps> = (props) => {

    const {

    } = props

    return(
        <p className="font-normal text-sm leading-7 text-justify text-clamp-4">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجــــله در ستون و سطرآنچنان 
                            که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع بــا هدف‌از
                            و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.    
        </p> 
    )
}
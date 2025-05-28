import React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";
import Link from "next/link";



export interface LinksBoxProps {

}



export const LinksBox: React.FC<LinksBoxProps> = (props) => {

    const {

    } = props

    const links = [
        {
            title: "مدرسه هیبریدی",
            url: "#",
        },
        {
            title: "اخــبار و مـــــقالات",
            url: "#",
        },
        {
            title: "افتخارات شهریار",
            url: "#",
        },
        {
            title: "پــیش‌‌ثبت‌نام",
            url: "#",
        },
        {
            title: "تـــیم شـهریـار",
            url: "#",
        },
        {
            title: "دربــــــــــاره مـــا",
            url: "#",
        },
    ]

    return(
        <ul className="grid grid-cols-2 gap-3 font-normal text-sm select-none">
            {links.map(({title, url}, idx) => (
                <li key={idx} className="flex items-center text-justify gap-2 hover:text-primary transition-colors">
                    <Link href={url} className="w-full">
                        <span className="text-justify w-full">{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
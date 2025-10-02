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
            url: "/hybrid",
        },
        {
            title: "اخــبار و مـــــقالات",
            url: "/news",
        },
        {
            title: "افتخارات شهریار",
            url: "/honors",
        },
        {
            title: "پــیش‌‌ثبت‌نام",
            url: "/preregister",
        },
        {
            title: "تـــیم شـهریـار",
            url: "/team",
        },
        {
            title: "دربــــــــــاره مـــا",
            url: "/about",
        },
    ]

    return(
        <ul className="grid grid-cols-2 gap-3 font-normal text-sm">
            {links.map(({title, url}, idx) => (
                <li key={idx} className="flex items-center truncate gap-2 w-fit">
                    <Link href={url} className="max-w-full hover:text-primary transition-colors">
                        <span className="truncate max-w-full">{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
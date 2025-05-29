import React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";



export interface ContactBoxProps {

}



export const ContactBox: React.FC<ContactBoxProps> = (props) => {

    const {

    } = props

    return(
        <ul className="flex flex-col gap-3 font-normal text-sm">
            <li className="flex items-center gap-2">

            <span>وکـــــیل آباد، بلوار هاشمیه، هاشمیه 16</span>
            </li>
            <li className="flex items-center gap-2">

                <span>وکـــــیل آباد، 63 ( آزادگـــــان )، پلاکـــــ 24</span>
            </li>
            <li className="flex items-center gap-2">

                <div className="flex items-center w-full gap-2 ">
                    <span>051-38662080</span> 
                    <span>051-35026311</span>
                </div>
            </li>
        </ul>
    )
}
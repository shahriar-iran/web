import React from "react";
import { Icon } from "@iconify/react";



export interface ContactBoxProps {

}



export const ContactBox: React.FC<ContactBoxProps> = (props) => {

    const {

    } = props

    return(
        <ul className="flex flex-col gap-3 font-normal text-sm">
            <li className="flex items-center gap-1">
                <div className="text-primary flex justify-center items-center">
                    <Icon icon="solar:point-on-map-line-duotone" width="20" height="20" />
                </div>
                <span>وکـــــیل آباد، بلوار هاشمیه، هاشمیه 16</span>
            </li>
            <li className="flex items-center gap-1">
                <div className="text-primary flex justify-center items-center">
                    <Icon icon="solar:point-on-map-line-duotone" width="20" height="20" />
                </div>
                <span>وکـــــیل آباد، 63 ( آزادگـــــان )، پلاکـــــ 24</span>
            </li>
            <li className="flex items-center justify-center gap-1">
                <div className="text-primary flex justify-center items-center">
                    <Icon icon="solar:phone-calling-line-duotone" width="20" height="20" />
                </div>
                <div className="flex items-center w-full gap-2 ">
                    <span>051-38662080</span> 
                    <span>051-35026311</span>
                </div>
            </li>
        </ul>
    )
}
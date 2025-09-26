import React from "react";
import clsx from "clsx";
import Link from "next/link";



export interface MenuItemProps {
    id: string;
    isActive?: boolean;
    title: string;
    path: string;
}




export const MenuItem = (props: MenuItemProps) => {
    const {
        isActive,
        id,
        title,
        path,
    } = props;



    // Using a pseudo-element for the underline to control its width
    const className = "shrink-0 relative truncate cursor-pointer flex items-center h-fit md:h-full py-0 px-4 transition-colors font-light md:font-normal text-xs md:text-sm text-[#0C0E16] dark:text-white md:rounded-none md:!bg-transparent md:!text-[#0C0E16] md:dark:!text-white md:!opacity-50 md:hover:!opacity-100 after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-blue-500 after:w-[calc(100%-4rem)] after:scale-x-0 after:transition-transform hover:after:scale-x-100 data-[active=true]:after:scale-x-100 data-[active=true]:!opacity-100"


    return (
        <li
            className={clsx(className)}
            data-active={isActive}
        >
            <Link href={`${path}`} className="h-12 w-fit flex items-center">
                {title}            
            </Link>
        </li>
    )
}
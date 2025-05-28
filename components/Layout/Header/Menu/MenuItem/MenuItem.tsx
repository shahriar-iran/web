import React from "react";
import clsx from "clsx";
import Link from "next/link";



export interface MenuItemProps {
    id: string;
    isActive?: boolean;
    title: string;
    isMenu?: boolean;
}




export const MenuItem = (props: MenuItemProps) => {
    const {
        isActive,
        id,
        title,
    } = props;



    const className = "shrink-0 relative truncate cursor-pointer flex items-center h-full py-4 px-4 transition-colors font-semibold bg-primary-50 text-primary hover:bg-primary hover:text-white rounded-full data-[active=true]:bg-primary data-[active=true]:text-white md:data-[active=true]:!opacity-100 md:rounded-none md:!bg-transparent md:!text-[#0C0E16] md:dark:!text-white md:!opacity-50 md:hover:!opacity-100"


    return (
        <li
        className={clsx(className)}
        data-active={isActive}
        >
            <Link href={`${id}`}>
                {title}            
            </Link>
        </li>
    )
}
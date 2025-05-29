import React from 'react';
import {Logo} from '@/components/Logo/Logo'
import clsx from "clsx";
import Link from "next/link";


export interface HeaderLogoProps {
    className?: string
}


export const HeaderLogo = (props: HeaderLogoProps) => {

    const {className} = props;

    return (
        <Link href="#home" className={clsx("h-14 w-14 rounded-[1px] justify-center items-center flex", className)}>
            <Logo
                size={48}
            />
        </Link>
    )
}
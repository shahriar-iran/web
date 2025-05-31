import React from 'react';
import {Logo} from '@/components/Logo/Logo'
import clsx from "clsx";
import Link from "next/link";


export interface HeaderLogoProps {

}


export const HeaderLogo = (props: HeaderLogoProps) => {

    const {} = props;

    return (
        <Link href="/" >
            <Logo
                size={48}
                className="hidden md:block"
            />
            <Logo
                size={40}
                className="block md:hidden"
            />
        </Link>
    )
}
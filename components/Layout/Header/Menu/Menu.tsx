"use client"

import React from "react";
import {MenuItem, MenuItemProps} from '@/components/Layout/Header/Menu/MenuItem/MenuItem';
import { ScrollShadow } from "@heroui/scroll-shadow";
import { usePathname } from 'next/navigation';

export interface MenuProps {
    items: MenuItemProps[];
}

export const Menu = (props : MenuProps) => {
    const {
        items
    } = props;

    const pathname = usePathname()

    return (
        <div className="flex-1 group/nav flex justify-start items-center h-10 md:h-12 md:w-0">
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                size={0}
                as="nav"
                className="flex max-w-[calc(100%)] bg-white md:bg-transparent w-fit right-0 absolute h-fit md:h-full pe-2 md:pe-0 ps-0 md:ps-0 md:relative transition-transform md:transition-none z-10 items-center gap-2 w-full translate-y-full md:translate-y-0 group-data-[open=true]/nav:translate-y-full"
            >
                <ul className="relative flex-col md:flex-row gap-x-2 items-center justify-start h-full w-fit md:w-full flex">
                    {items.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            id={item.id}
                            title={item.title}
                            isActive={pathname === item.id}
                            isMenu={item.isMenu}
                        />
                    ))}
                </ul>
            </ScrollShadow>   
        </div>
    )
}
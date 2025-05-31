"use client"

import React from "react";
import {MenuItem, MenuItemProps} from '@/components/Layout/Header/Menu/MenuItem/MenuItem';
import { ScrollShadow } from "@heroui/scroll-shadow";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import { Button } from "@heroui/button";


export interface MenuProps {
    items: MenuItemProps[];
    isOpenMenu: boolean;
}

export const Menu = (props : MenuProps) => {
    const {
        items,
        isOpenMenu,
    } = props;

    const pathname = usePathname()


    return (
        
        <div 
            className="flex-1 min-w-full md:min-w-auto md:w-0 order-last md:order-none flex justify-start items-center md:h-12"
        >
            <div className="relative bg-white md:bg-transparent overflow-hidden flex flex-col gap-3 max-w-full w-full md:w-fit h-0 group-data-[menu-open=true]/header:h-fit md:!h-full">
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                size={20}
                as="nav"
                className={clsx(
                    "relative",
                    "flex flex-row items-center",
                    "p-0",
                    "",
                    "transition-all z-10",
                    "right-0 top-0",
                )}
            >
                <ul className="relative flex-row gap-x-2 items-center justify-start h-fit md:w-fit w-full flex">
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
            <div className="flex gap-2 items-center justify-center flex md:hidden">
                    <Button
                        variant="flat"
                        color="primary"
                        size="sm"
                        className={clsx(
                            "border-1 border-primary px-1 pe-3 text-xs gap-2 py-1 h-10 rounded-xl"
                        )}
                        as="a"
                        href="/"
                        startContent={(
                            <div className="h-full aspect-square bg-primary bg-white rounded-lg">

                            </div>
                        )}
                    >
                        پـیش ‌ثبت‌نـام
                    </Button>
                    <Button
                        variant="solid"
                        color="primary"
                        size="sm"
                        className={clsx(
                            "border-1 border-foreground bg-foreground text-xs px-1 pe-3 gap-2 py-1 h-10 rounded-xl"
                        )}
                        as="a"
                        href="/"
                        startContent={(
                            <div className="h-full aspect-square bg-primary bg-white rounded-lg">

                            </div>
                        )}
                    >
                        ورود/عضویت
                    </Button>
                </div>
            </div>
        </div>
    )
}
"use client"

import React from "react";
import {MenuItem, MenuItemProps} from '@/components/Layout/Header/Menu/MenuItem/MenuItem';
import { ScrollShadow } from "@heroui/scroll-shadow";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import path from "path";


export interface MenuProps {
    items: MenuItemProps[];
}

export const Menu = (props : MenuProps) => {
    const {
        items,
    } = props;

    const pathname = usePathname()


    return (
        
        <div 
            className="flex-1 min-w-full md:min-w-auto md:w-0 order-last md:order-none flex justify-start items-center md:h-12"
        >
            <div className="relative bg-white md:bg-transparent overflow-hidden flex flex-col gap-3 max-w-full w-full md:w-fit h-0 group-data-[menu-open=true]/header:h-[100px] transition-all md:!h-full">
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                size={20}
                as="nav"
                className="relative flex flex-row items-center p-0 z-10 right-0 top-0"
            >
                <ul className="relative flex-row gap-x-2 items-center justify-start h-fit md:w-fit w-full flex">
                    {items.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            id={item.id}
                            title={item.title}
                            path={item.path}
                            isActive={pathname.startsWith(item.path)}
                        />
                    ))}
                </ul>
            </ScrollShadow>   
            <div className="flex gap-2 items-center justify-center md:hidden">
                    <Button
                        variant="flat"
                        color="primary"
                        size="sm"
                        className={clsx(
                            "border-1 border-primary px-1 pe-3 text-xs gap-2 py-1 h-10 rounded-xl"
                        )}
                        as={Link}
                        href="/preregister/school"
                        startContent={(
                            <div className="h-full aspect-square bg-white text-primary rounded-xl flex justify-center items-center">
                                <Icon icon="fluent:lightbulb-person-28-regular" width="24" height="24" />
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
                        href="https://panel.shahriareiran.com/"
                        startContent={(
                            <div className="h-full aspect-square bg-white text-primary rounded-xl flex justify-center items-center">
                                <Icon icon="fluent:person-circle-28-filled" width="24" height="24" />
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
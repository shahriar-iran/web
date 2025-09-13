"use client"


import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Menu } from "./Menu/Menu";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import clsx from "clsx";
import { MenuItemProps } from "./Menu/MenuItem/MenuItem";
import { Icon } from '@iconify/react';
import Link from "next/link";




export interface HeaderProps {
    items: MenuItemProps[];
}




export const Header = (props : HeaderProps) => {
    const {
        items
    } = props;
    
    
    const [isOpenMenu, setOpenMenu] = useState(false)
    
    return(
        <header
            data-menu-open={isOpenMenu}
            className={clsx("fixed group/header shrink-0 z-50 top-0 py-2 px-2 w-full flex justify-center items-center")}
        >
            <div className="mx-auto w-full max-w-7xl items-start flex flex-row flex-wrap md:flex-nowrap justify-between gap-x-3 p-2 md:p-5 rounded-3xl md:rounded-4xl bg-white shadow-xl relative">
                <HeaderLogo/>
                <Menu
                    items={items}
                />
                <div className="flex gap-3 items-center justify-center">
                    <Button
                        variant="flat"
                        color="primary"
                        size="lg"
                        className={clsx(
                            "border-2 border-primary px-1 pe-3 text-sm gap-2 py-1 h-12 rounded-2xl hidden md:flex"
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
                        size="lg"
                        className={clsx(
                            "border-2 border-foreground bg-foreground text-sm px-1 pe-3 gap-2 py-1 h-12 rounded-2xl hidden md:flex"
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
                    <Button
                        variant="solid"
                        color="primary"
                        size="md"
                        className={clsx(
                            "border-2 border-primary px-1 text-sm gap-2 py-1 h-10 rounded-2xl flex items-center justify-center md:hidden"
                        )}
                        onPress={() => setOpenMenu((p) => (!p))}
                        isIconOnly
                    >
                        <Icon 
                            icon={isOpenMenu ? "fluent:dismiss-24-filled" : "fluent:line-horizontal-3-16-filled"}
                            width="24"
                            height="24" 
                        />
                    </Button>
                </div>
            </div>
        </header>
    )
}